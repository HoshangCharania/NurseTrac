<?php
ob_start();
session_start();
//print_r($_SESSION['email']);
//print_r($_SESSION['account']);
$a=$_SESSION['email'];
//echo "Check";
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="nursetrac";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected so successfully";
?>