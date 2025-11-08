<?php
  // Cambia el correo de destino por el tuyo
  $receiving_email_address = 'tucorreo@ejemplo.com';

  $subject = "Online Appointment Form";
  $message = "Name: " . $_POST['name'] . "\n";
  $message .= "Email: " . $_POST['email'] . "\n";
  $message .= "Phone: " . $_POST['phone'] . "\n";
  $message .= "Appointment Date: " . $_POST['date'] . "\n";
  $message .= "Department: " . $_POST['department'] . "\n";
  $message .= "Doctor: " . $_POST['doctor'] . "\n";
  $message .= "Message: " . $_POST['message'] . "\n";

  $headers = "From: " . $_POST['email'];

  if (mail($receiving_email_address, $subject, $message, $headers)) {
      echo "Message sent successfully!";
  } else {
      echo "Message could not be sent.";
  }
?>