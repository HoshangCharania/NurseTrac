<?php
ob_start();

        session_start();
        
        $email=$_SESSION['email'];
    $servername ="localhost";
$username = "root";
$password ="root";
$dbname ="nursetrac";
        $conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
   echo "Connected so successfully";
 
    $date=$_POST["date"];
    echo "$date";
    
$sql="INSERT INTO `Task`( `email`, `TargetID`, `Hours`, `Explanation`, `TDate`, `EssentialID`) VALUES ('$email',1,4,'yes','$date',1)";
$result=mysqli_query($conn,$sql);
// Mysql_num_row is counting table row

// If result matched $username and $password, table row must be 1 row
if($count==1)
   {
        echo "yes";
        session_start();
        $_SESSION['email'] = $email;
        print_r($_SESSION['email']);
        $_SESSION['password'] = $password;
        echo "Login Successful";
        return true;
    }
    else 
    {
        echo "Wrong Username or Password";
        return false;
    }
        
        
?>