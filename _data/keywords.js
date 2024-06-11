// const fs = require('fs');
// const path = require('path');
// const rootDir = process.cwd();
// let baseDir = process.env.NODE_ENV === 'production' ? '' : 'assets';

// module.exports = async function () {
//     return new Promise((resolve, reject) => {
//         let data = []; // Rename allFilesData to data
//         let index = 1;

//         function readFile() {
//             const fileName = `${index}`.padStart(3, '0');
//             const filePath = path.join(baseDir, `textfiles/${fileName}.txt`);

//             if (!fs.existsSync(filePath)) {
//                 console.error(`File ${filePath} does not exist. Stopping reading files.`);
//                 resolve(data);
                
//                 return;
//             }

//             fs.readFile(filePath, 'utf8', (err, fileData) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }

//                 const lines = fileData.trim().split('\n');
//                 const words = [];
//                 const definitions = [];

//                 lines.forEach((line, lineIndex) => {
//                     if (lineIndex % 2 === 0) {
//                         words.push(line.trim());
//                     } else {
//                         definitions.push(line.trim());
//                     }
//                 });

//                 data.push({ number: fileName, words, definitions });

//                 index++;
//                 readFile();
//             });
//         }

//         readFile();
//     });
// };
