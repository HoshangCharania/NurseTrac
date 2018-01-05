<?php
include_once "connection.php";
$sqlcc1="SELECT SUM(Hours) AS temp, email FROM TASK WHERE email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
$i=1;
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
       $value1=$rows['temp'];
       echo "Number of hours completed: $value1";
    }
?>