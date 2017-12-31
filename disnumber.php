<?php
include_once "connection.php";
$sqlcc1="SELECT Contact_Number AS temp FROM login WHERE email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
       $value1=$rows['temp'];
       echo "$value1";
    }
?>