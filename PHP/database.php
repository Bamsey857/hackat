<?php

$serverName = "localhost";
$username = "root";
$password = "";
$database = "ecommerce";

$conn;

try {
  $conn = mysqli_connect($serverName, $username, $password, $database);
  echo "Connected successfully";
} catch (mysqli_sql_exception $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
