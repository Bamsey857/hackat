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
$name = $data['name'];

if (findUserByEmail($email)) {
  echo json_encode(array("error" => "User already exists", "status" => 409));
} else {
  try {
    if (createUser($name, $email, $password)) {
      $content = "Successfully logged in user: " . $email;
      $token = password_hash($content, PASSWORD_DEFAULT);
      echo json_encode(array("success" => "User created successfully", "token" => $token, "status" => 200, "email" => $email));
    } else {
      echo json_encode(array("error" => "Failed to create user", "status" => 501));
    }
  } catch (Exception $e) {
    echo json_encode(array("error" => "An error occurred: " . $e->getMessage(), "status" => 500));
  }
}
