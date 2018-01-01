<?php
include_once "connection.php";
$date=$_POST["date"];
$date=date("Y-m-d",strtotime($date));


$sql = "SELECT `TargetID`, `Hours`, `Explanation`, `EssentialID` FROM `Task` WHERE TDate='$date' AND email='$a'";

$result = $conn->query($sql);
 while ( $rows = $result->fetch_assoc() ) 
    {
       $value1=$rows['TargetID'];
       $value2=$rows['Hours'];
       echo "$value1 $value2";
    }

$conn->close();

?>
