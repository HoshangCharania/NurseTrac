<?php
include_once "connection.php";
   if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
      $productname=$_POST["productname"];
       $sell_price=$_POST["sell_price"];
       $cost_price=$_POST["cost_price"];
       $quantity=$_POST["quantity"];
      $expensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"uploads/".$file_name);
          $link="http://localhost/uploads/$file_name";
        // echo "http://localhost/uploads/$file_name, $productname , $sell_price, $cost_price, $quantity";
          
          $sqlcc1="INSERT INTO `Products`( `name`, `quantity`, `sold_quantity`, `selling_price`, `cost_price`, `image_url`) VALUES ('$productname','$quantity','0','$sell_price','$cost_price','$link')";
                $resultcc1 = $conn->query($sqlcc1);
                $last_id = $conn->insert_id;
            // echo "Product id is: $last_id";
          $link2="http://localhost:8888/index.html";
          echo"Your product has been added to the database, the product ID is $last_id. Head back to our website by clicking on the link. <script>window.alert('Your product was added successfully, the id is $last_id'); window.location.assign('".$link2."')</script>";
           $sqlcc2="INSERT INTO `Products_department`(`PID`, `Department_name`) VALUES ('$last_id','fruits')";
                $resultcc3 = $conn->query($sqlcc3);
                
            // echo "Product id is: $last_id";
          $sqlcc3="INSERT INTO `Sells`(`pid`, `email`) VALUES ('$last_id','$a')";
                $resultcc3 = $conn->query($sqlcc3);
          
      }else{
         print_r($errors);
          
      }
   }



?>