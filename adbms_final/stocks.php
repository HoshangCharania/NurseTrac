<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Social Weather</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/full-slider.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  </head>
<style>
    h3{
        color:black;
    }
    p{
        color: black;
    }
    .carousel-indicators{
        color: black !important;
    }
    .check{
        margin-left: 15%;
        width:1080px;
        height: 900px;
    }
    .check1{
        margin-left: 15%;
        width:1080px;
        height: 900px;
    }
</style>
  <body bgcolor="#D0D0D0">

    <!-- Navigation -->
        <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Stock Market</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="stocks.php">Stocks</a>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="comp.php">Compare with other DBs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="data.php">How did we get this data?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

<div class="check">
    <br>
    <br>
    <br>
    <h3>
  Stock queries:
  <small class="text-muted"></small>
</h3>
         <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=54&orgId=1&tab=general&from=631170000000&to=1546318800000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>Stocks on a monthly basis</h1>
        <p>
           What we can see out here is the stocks which are taken on a monthly basis for all the 47 stock indices we have taken into concern.
          </p>
       
      </div>
     </section>
    <div class="check">
    
    
    <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=2&orgId=1&from=631170000000&to=1546318800000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
      </div>
      <section class="py-5">
      <div class="container">
       
        <h1>Stocks go up by a certain margin</h1>
        <p>I have taken the stocks on a monthly basis and checked when do the stocks go above a certain margin that is 800. Click below, to see this query as a table where we have the timestamps along with the values of the stocks who have a value greater than 800.
          </p>
       
      <h3>
  Want to see a a detailed table of the difference in internet usage?
  <small class="text-muted"><input type="button" value="Click here" id="geohash" onclick="change()"></small>
</h3>
      </div>
     </section>
    <div class="check1">
    
    
    <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=56&orgId=1&tab=general&from=631170000000&to=1546318800000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
      </div>
    <div class="check">
    <br>
    <br>
    <br>
    <h3>
  Stocks
  <small class="text-muted">From 2012 to 2017</small>
</h3>
        
         
        <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=50&orgId=1&tab=general&from=631170000000&to=1546318800000&theme=dark" width="100%" height="100%" frameborder="0"></iframe>
        <p></p>
        <br>
    
        <h3>
  Microsoft vs Amazon vs Google
  <small class="text-muted"> from 2012 to 2017(3-D graphs)</small>
</h3>
      
</div> 
       <br>
    <br>
    <br>
    <br>
       <br>
    <br>
    <br>
    <br>
      <div class="check">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    
         
        <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=22&orgId=1&tab=general&from=631170000000&to=1546318800000&theme=light" width="100%" height="20%" frameborder="0"></iframe>
        <p></p>
          <h3>
  Least stock purchased by any investor
  <small class="text-muted">In 2015</small>
</h3>
        
        
</div> 
<div class="check">
    
    
    
        
         
        <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=6&orgId=1&tab=general&from=631170000000&to=1546318800000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
        <p></p>
          <br>
    <br>
    <br>
    <h3>
  Max movements in a stock positively.(that is profit)
  <small class="text-muted">On a yearly basis.</small>
</h3>
</div> 
<div class="check">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    
   
        
         
        <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?panelId=4&orgId=1&from=631170000000&to=1546318800000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
        <p></p>
          <br>
    <br>
    <br>
     <h3>
  Max movements in a stock negatively.(that is no profit)
  <small class="text-muted">On a yearly basis.</small>
</h3>
</div> 
      
        
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <div class="check">
    
    
    
        
         
        <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?orgId=1&panelId=52&from=631170000000&to=1546318800000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
        <p></p>
          <br>
    <br>
    <br>
    <h3>
  Number of tickers per investor
  <small class="text-muted">in 2015</small>
</h3>
          
</div> 
        <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
      <div class="check">

        
       <iframe src="http://localhost:3000/d-solo/n0X7kGWiz/adbms?orgId=1&from=631170000000&to=1546318800000&theme=light&panelId=48" width="100%" height="100%" frameborder="0"></iframe>
        <p></p>
          <br>
    <br>
    <br>
    <h3>
  Pie chart for stock averages over the years.
  <small class="text-muted">From 1990 to current stock data.</small>
</h3>
          
</div> 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Stocks by Pitt 2018</p>
      </div>
      <!-- /.container -->
    </footer>
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script>
     $('.check1').hide();
     function change(){
         if(document.getElementById("geohash").value=="Click here")
        {
            document.getElementById("geohash").value="Click to remove";
            $('.check1').show(2000);
        }
         else
         {
                 document.getElementById("geohash").value="Click here";
                 $('.check1').hide(2000);
          }
     }
    </script>
  </body>

</html>
