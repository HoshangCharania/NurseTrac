<?php
echo "Check";
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="myDB";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$sql = "SELECT DISTINCT firstname,lastname FROM Myguests WHERE id<=7";

if ($conn->query($sql) == TRUE) {
    $sql_info = $conn->query($sql);
    echo "Record created successfully. New record id is".$sql_info;
} else {
    
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>