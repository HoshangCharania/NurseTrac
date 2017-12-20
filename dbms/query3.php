<?php
include_once "connection.php";
$sqlcc2="SELECT s.email AS temp FROM Sells s, Orders o, Order_Items i WHERE s.pid=i.PID AND i.Order_Id=o.Id GROUP BY s.email HAVING SUM(o.total_amount)>=ALL (SELECT SUM(o1.total_amount)

FROM Sells s1, Orders o1, Order_Items i1

WHERE s1.pid=i1.PID AND i1.Order_Id=o1.Id

GROUP BY s1.email)";
                $resultcc2 = $conn->query($sqlcc2);
 while ( $rows2 = $resultcc2->fetch_assoc() ) 
 {
    $value3=$rows2['temp'];
       echo "Sales person who has the most profit: $value3 </br>";
    }
?>