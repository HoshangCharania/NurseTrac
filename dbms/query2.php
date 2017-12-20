<?php
include_once "connection.php";
$sqlcc2="SELECT p.name AS temp
FROM Products p, Order_Items o
WHERE p.Product_ID=o.PID
GROUP BY p.name
HAVING COUNT(o.PID)>=ALL(SELECT COUNT(o1.PID)
FROM Order_Items o1
GROUP BY o1.PID)";
                $resultcc2 = $conn->query($sqlcc2);
 while ( $rows2 = $resultcc2->fetch_assoc() ) 
 {
    $value3=$rows2['temp'];
       echo "Most commonly sold product: $value3 </br>";
    }
?>