<?php

include "database.php";

function createUser($fullname, $email, $password) {
  global $conn;

  $hash = password_hash($password, PASSWORD_DEFAULT);

  $sql = "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, "sss", $fullname, $email, $hash);
  $success = mysqli_stmt_execute($stmt);

  if ($success) {
    return true;
  } else {
    return false;
  }
}

function deleteUser($userId) {
  global $conn;

  $sql = "DELETE FROM users WHERE id = ?";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, "i", $userId);
  $success = mysqli_stmt_execute($stmt);

  if ($success) {
    return true;
  } else {
    return false;
  }
}

function updateUser($userId, $newfullname, $newEmail, $newPassword) {
  global $conn;

  $sql = "UPDATE users SET fullname = ?, email = ?, password = ? WHERE id = ?";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, "sssi", $newfullname, $newEmail, $newPassword, $userId);
  $success = mysqli_stmt_execute($stmt);

  if ($success) {
    return true;
  } else {
    return false;
  }
}


function findUserByEmail($email) {
  global $conn;

  $sql = "SELECT * FROM users WHERE email = ?";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, "s", $email);
  mysqli_stmt_execute($stmt);

  $result = mysqli_stmt_get_result($stmt);
  $user = mysqli_fetch_assoc($result);

  return $user;
}

function getUserDetails($userId) {
  global $conn;

  $sql = "SELECT * FROM users WHERE id = ?";
  $stmt = mysqli_prepare($conn, $sql);
  mysqli_stmt_bind_param($stmt, "i", $userId);
  mysqli_stmt_execute($stmt);

  $result = mysqli_stmt_get_result($stmt);
  $user = mysqli_fetch_assoc($result);

  return $user;
}