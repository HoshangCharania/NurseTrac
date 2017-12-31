<?php
include_once "connection.php";

$begin_date = $_GET["begin_date"];
$end_date = $_GET["end_date"];
$date_month = $_GET["date_month"];
$date_year = $_GET["date_year"];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error)
{
	die("Connection failed: " . $conn->connect_error);
}
$hours = [0,0,0,0,0,0,0,0,0];

if ($begin_date==NULL){
	$sql = "SELECT * from Task where MONTH(TDate) = ".$date_month." and YEAR(TDate) = ".$date_year." and email='$a'";
}else{
	$sql = "SELECT * from Task where TDate between '".$begin_date."' and '".$end_date."' and email='$a'";
}

$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row=$result->fetch_assoc()){
		$Eid = $row['EssentialID']-1;
		$hours[$Eid] += $row['Hours'];
	}
}
echo json_encode($hours);

$conn->close();

?>