<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Honeypot-Feld (must be empty)
    if (!empty($_POST["website"])) {
        http_response_code(403);
        header("Location: /index.html?status=spam");
        exit;
    }

    // Clean and check fields
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if (!$email || empty($name) || empty($message)) {
        header("Location: /index.html?status=invalid");
        exit;
    }

    // Prepare email sending
    $to = "dv@darkovukic.de";
    $subject = "Message from darkovukic.de";
    $headers = "From: $email\r\nReply-To: $email";
    $body = "Name: $name\nE-Mail: $email\n\nMessage:\n$message";

    // Send mail and forward to index.html
    if (mail($to, $subject, $body, $headers)) {
        header("Location: /index.html?status=success");
        exit;
    } else {
        header("Location: /index.html?status=error");
        exit;
    }
} else {
    // Allow only POST
    header("Location: /index.html?status=invalid_method");
    exit;
}
