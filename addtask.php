<?php
include_once "connection.php";
$date=$_POST["date"];
$hours=$_POST["hours"];
$target=$_POST["target"];
$ess=$_POST["ess"];
$explain=$_POST["explain"];
$date=date("Y-m-d",strtotime($date));
$sql="INSERT INTO `Task`(`email`, `TargetID`, `Hours`, `Explanation`, `TDate`, `EssentialID`) VALUES ('$a','$target','$hours','$explain','$date','$ess')";
 $resultcc1 = $conn->query($sql);

?>