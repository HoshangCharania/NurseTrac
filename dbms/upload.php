<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>PITT Grocery Store</title>
    </head>
<link rel="stylesheet" type="text/css" href="website.css">
    <style>
        table, th, td {
    border: 1px solid black;
            padding: 30px;
    border-collapse: collapse;
}
        #txt{
            margin-top:  50px;
            margin-left: 30px;
        }
        #table1{
            margin-left: 20px;
            margin-top: 20px;
            font-size: 20px;
            margin-right: 20px;
        }
        #table2{
            font-size:20px;
        }
        #test{
            font-weight: bold;
        font-size: 30px;
        font-style:normal;
        
        color:darkblue;
        border: 1px;
            margin-left: 10px;
        }
        input{
            border:1px solid black;
            width: 130px;
            height: 20px;
            font-size: 20px;
        }
        #button2{
           
    margin-left: 625px;
    margin-top: 40px;
    font-size: 20px;
    width: 200px;
    text-align: center;
    padding-bottom: 10px;
    color: (255,255,255,1.0);
        z-index: 5;
        }
        #button3{
           
   
    font-size: 20px;
    width: 200px;
    text-align: center;
    padding-bottom: 10px;
    color: (255,255,255,1.0);
        z-index: 5;
        }
    </style>
    <body>
        <div id="header">
            
        </div>
        <div id="background">
        <img src="test2.jpg">
        </div>
        <div id="heading">
        <h1>PITT Grocery Store</h1>
        <div id="heading1">
        <button id="button1" onclick="cart()">Check your cart</button>
        </div>
        </div>
        <div id="heading2">
        <h1>A healthier living for the students..</h1>
        </div>
        <div id="image1">
        <img src="food.png" alt="PITT Grocery Store"/>
        </div>
         <div class="topnav" id="myTopnav">
              <a href="index.html">Home</a>
              <a href="myaccount.html">Login</a>
              <a href="newaccount.html">New Account</a>
              <a href="newaccount.html">About Us</a>
              <a href="addproducts.html" id="sales">Add Products</a>
             <a href="seeproducts.html" id="sales1">Your Products</a>
        </div>
        <div id="items">
        <p id="test">Add your product:</p>
            <p id="test1">test</p>
            <table id="table1">
            
               
                <tr><th>Name of the product:</th><th>Upload the image  for your product:</th><th>Enter your Selling price:(For showing profits)</th><th>Enter your cost price:</th><th>Your quantity:</th></tr>
                <tr><th><input type="text"></th><th><input type="file" id="imgupload" style="display:none"/> 
<button id="button3">Upload image</button></th><th><input type="number"></th><th><input type="number"></th><th><input type="number"></th></tr>
            
            </table>
            <button id="button2">Add your product</button>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
        
        function cart()
            {
                window.location.assign("cart.html");
            }
          /*$.ajax({
          url: "totalcart.php?",
          cache: false,
          type: "GET",
          success: function(response) {
          document.getElementById("txt").innerHTML= response;
          },
           error: function(xhr) {
          
    }
});
            var pid=1;
                    $.ajax({
    url: "addimages.php?",
    data: { 
        "pid":pid
    },
    cache: false,
    type: "POST",
    success: function(response) {
     document.getElementById("test").innerHTML= response;
     
    },
    error: function(xhr) {
       document.getElementById("test").innerHTML= "No";
    }
});*/
            $('#button3').click(function(){ $('#imgupload').trigger('click'); });
            var account;
            $.ajax({
    url: "sales.php?",
    cache: false,
    type: "GET",
    success: function(response) {
        
        
        
        account=response;
        //document.getElementById("test1").innerHTML=account;
        if(account=="Salesperson")
            {
                
                 $("#sales").show();
                $("#sales1").show();
            }
            else{
                $("#sales").hide();
                $("#sales1").hide();
            }

    },
    error: function(xhr) {
       document.getElementById("test1").innerHTML= "No";
    }
});     
                    
        
        </script>
        
        
    </body>
</html>