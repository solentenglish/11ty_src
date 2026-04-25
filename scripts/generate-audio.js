require('dotenv').config();
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = new textToSpeech.TextToSpeechClient();
const AUDIO_DIR = path.join(__dirname, '../assets/audio');
const POSTS_DIR = path.join(__dirname, '../content/posts/final');

function findMarkdownFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function generateAudio(filePath) {
  const index = path.basename(filePath, '.md');
  const outputPath = path.join(AUDIO_DIR, `${index}.mp3`);

  if (fs.existsSync(outputPath)) {
    console.log(`Skipping ${index} — already exists`);
    return;
  }

  const { data } = matter.read(filePath);
  const text = [data.question, data.answer].filter(Boolean).join('\n\n');

  if (!text.trim()) {
    console.log(`Skipping ${index} — no text content`);
    return;
  }

  console.log(`Generating ${index}.mp3...`);

  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: { languageCode: 'en-GB', name: 'en-GB-Neural2-B' },
    audioConfig: { audioEncoding: 'MP3' },
  });

  fs.writeFileSync(outputPath, response.audioContent, 'binary');
  console.log(`Saved ${index}.mp3`);
}

async function main() {
  const files = findMarkdownFiles(POSTS_DIR);
  console.log(`Found ${files.length} posts\n`);
  for (const file of files) {
    await generateAudio(file);
  }
  console.log('\nDone.');
}

main().catch(console.error);
