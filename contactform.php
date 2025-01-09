<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data and sanitize it
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate form fields
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Your email address to receive the contact form submissions
        $to = "mathewtj2112@gmail.com";  // Replace with your email address
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message. Please try again later.";
        }
    } else {
        echo "All fields are required!";
    }
}
?>
