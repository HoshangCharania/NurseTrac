<?php
ob_start();
session_start();
//print_r($_SESSION['email']);
//print_r($_SESSION['account']);
$a=$_SESSION['email'];
//echo "Check";
$servername ="sql308.byethost17.com";
$username = "b17_21058317";
$password ="truegunner";
$dbname ="b17_21058317_nursetrac";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected so successfully";
?>