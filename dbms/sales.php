<?php
ob_start();
session_start();
        
       $account=$_SESSION['account'];
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="pitt_store";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
   echo $account;
   ?>