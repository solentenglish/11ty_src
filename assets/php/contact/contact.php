<?php
include '/var/www/key.php';
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$comment = wordwrap($comment,70);
$combined = $name . '\n' . $email . '\n' . $comment;
$response = $_POST['g-recaptcha-response'];
$remoteIP = $_SERVER['REMOTE_ADDR'];
$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
    'secret' => $secretKey,
    'response' => $response,
    'remoteip' => $remoteIP
);
$options = array(
    'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    )
);

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$responseJson = json_decode($result);
// echo "<pre>";
// var_dump($responseJson);
// echo "</pre>";
// exit;
if ($responseJson->success && $responseJson->score > 0.5) {
mail("glensutton@fastmail.com","My subject",$combined);
header("Location: http://ieltswriting.tips/pages/contact/message_confirmation");
die();
} else {
    echo "Fail";
    // reCAPTCHA verification failed
    // Show an error message or take appropriate action
}
?>