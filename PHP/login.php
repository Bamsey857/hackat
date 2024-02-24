<?php

include "Users.php";

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($data === null) {
  echo json_encode(array("error" => "Invalid JSON"));
  exit;
}

$email = $data['email'];
$password = $data['password'];

if (findUserByEmail($email)) {

  $user = findUserByEmail($email);

  if (password_verify($password, $user['password'])) {
    $content = "Successfully logged in user: " . $user['email'];
    $token = password_hash($content, PASSWORD_DEFAULT);

    echo json_encode(array("success" => "User logged in successfully", "token" => $token, "status" => 200, "email" => $email));
  } else {
    echo json_encode(array("error" => "Invalid password", "status" => 401));
  }
} else {
  echo json_encode(array("error" => "User not found", "status" => 404));
}
