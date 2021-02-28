<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = 'Contact form submission';
    $from_site = 'jnguyen1563@github.io';
    $to = 'justinnguyen0821@gmail.com';

    $body = "";
    $body .= "From: ".$name. "\r\n";
    $body .= "Email: ".$email. "\r\n";
    $body .= "From Site: ".$from_site. "\r\n";
    $body .= "Message: ".$message. "\r\n";
    
    mail($to, $subject, $message);
?>