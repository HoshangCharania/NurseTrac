<?php
include_once "connection.php";
<<<<<<< HEAD
$sqlcc1="SELECT Contact_Number AS temp FROM login WHERE email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
       $value1=$rows['temp'];
=======
$sqlcc1="SELECT Contact_Number FROM login WHERE email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
$i=1;
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
       $value1=$rows['Contact_Number'];
>>>>>>> 7577f4590c353b2cf3a378917d008020065e1823
       echo "$value1";
    }
?>