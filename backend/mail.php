<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Honeypot-Feld (must be empty)
    if (!empty($_POST["website"])) {
        http_response_code(403);
        exit("Spam detected.");
    }

    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if (!$email || empty($name) || empty($message)) {
        http_response_code(400);
        exit("Please fill in all fields correctly.");
    }

    $to = "dv@darkovukic.de";
    $subject = "Message from darkovukic.de";
    $headers = "From: $email\r\nReply-To: $email";
    $body = "Name: $name\nE-Mail: $email\n\nMessage:\n$message";
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you $name! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Error sending.";
    }
} else {
    http_response_code(405);
    echo "Only POST allowed.";
}
