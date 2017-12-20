<?php
echo "Check";
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="nursetrac";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected so successfully";
$email = $_GET["Email"];
echo "The address is $email";
$password = $_GET["Pass"];
echo "The Password is $password";
$sql= "SELECT DISTINCT email FROM login WHERE email='$email' and password='$password'";
echo $sql;
$result=$conn->query($sql);
if ($conn->query($sql) == TRUE)
{
  echo "Record added successfully";
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $a=$row["email"];
            echo $a;
    }
} else {
    echo "0 results";
}
$conn->close();
?>
