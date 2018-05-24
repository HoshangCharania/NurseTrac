<?php
include_once "connection.php";
$date=$_POST["date"];
$date=date("Y-m-d",strtotime($date));
$act->bool = "false";
$sql = "SELECT `TargetID`, `Hours`, `Explanation`, `EssentialID` FROM `Task` WHERE TDate='$date' AND email='$a'";
$result = $conn->query($sql);
 while ( $rows = $result->fetch_assoc() ) 
    {
      $act->TargetID = $rows['TargetID'];
      $act->Hours = $rows['Hours'];
      $act->Explanation = $rows['Explanation'];
      $act->EssentialID = $rows['EssentialID'];
      $act->bool = "true";
      
    }
$actJSON = json_encode($act);
      echo $actJSON;

$conn->close();

?>
