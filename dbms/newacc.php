<?php

echo "Check";
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="pitt_store";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected so successfully";
$account = $_POST["account"];
echo "The account is $account";
$email = $_POST["Email"];
echo "The email is $email";
$password = $_POST["Pass"];
echo "The Password is $password";
$first_name = $_POST["FirstName"];
echo "The FNAME is $first_name";
$last_name = $_POST["LastName"];
echo "The LNAME is $last_name";
$phone = $_POST["Phone"];
echo "The phone number is $phone";
$age = $_POST["age"];
echo "The age is $age";
$gender = $_POST["gender"];
echo "The gender is $gender";
$st_number = $_POST["st_number"];
echo "The street number is $st_number";
$st_name = $_POST["st_name"];
echo "The street name is $st_name";
$zip = $_POST["zip"];
echo "The zip is $zip";
if($account=="Customer")
{
$sql= "INSERT INTO `Customer`(`first_name`, `last_name`, `email`, `password`, `age`, `phone`, `gender`) VALUES ('$first_name','$last_name','$email','$password','$age','$phone','$gender')";
$sql1="INSERT INTO `Address`(`zipcode`, `street_number`, `street_name`) VALUES ('.$zip.', ".$st_number.", '$st_name')";
    
    if ($conn->query($sql) == TRUE)
{
  echo "Record added successfully";
 
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
    if ($conn->query($sql1) == TRUE)
{
         $last_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
        $sql2="INSERT INTO `Customer_address`(`address_id`, `email`) VALUES ('$last_id','$email')";
         if ($conn->query($sql2) == TRUE)
{
  echo "address matched with email";
} 
        else{
            echo "Error matching address with email " . $conn->error;
        }
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
    
//$sql2="INSERT INTO `Customer_address`(`address_id`, `email`) VALUES ([value-2])";
}
else if($account=="Salesperson")
{
   $sql="INSERT INTO `Salesperson`(`first_name`, `last_name`, `email`, `password`, `age`, `phone`, `gender`) VALUES ('$first_name','$last_name','$email','$password','$age','$phone','$gender') ";
    if ($conn->query($sql) == TRUE)
{
  echo "Record added successfully";
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
    
}

$conn->close();
?>