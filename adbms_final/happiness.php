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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Social Weather</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Stocks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="terrorism.php">Terrorism</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">World Bank Data</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Happiness</a>
              <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="internet.php">Internet Usage</a>
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
  How happy can the internet make you?
  <small class="text-muted">Not that happy.</small>
</h3>
         <iframe src="http://localhost:3000/dashboard-solo/db/new-dashboard-copy?panelId=8&orgId=1&from=-315601200000&to=1325394000000&tab=display&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>Happiness</h1>
        <p>
            At a glance it is not clear. So we need to do more analysis. Let's see the years which had a better happiness than the average happiness.
          </p>
       
      <h3>
  Average happiness
  <small class="text-muted">Always nice to be above average</small>
</h3>
      </div>
     </section>
    <div class="check">
    
    
    <iframe src="http://localhost:3000/dashboard-solo/db/new-dashboard-copy?panelId=9&orgId=1&from=-315601200000&to=1325394000000&tab=options&theme=light" width="100%" height="60%" frameborder="0"></iframe>
      </div>
      <section class="py-5">
      <div class="container">
       
        <h1>Internet</h1>
        <p>The internet did have a steep increase from 1995 to 2002. you can <a href="internet.php">click here</a> to know more about it, I have explained it in my relation between stocks and happiness.
          </p>
       
      <h3>
  Want to see a a detailed table of the difference in internet usage?
  <small class="text-muted"><input type="button" value="Click here" id="geohash" onclick="change()"></small>
</h3>
      </div>
     </section>
    <div class="check1">
    
    
    <iframe src="http://localhost:3000/dashboard-solo/db/new-dashboard-copy?panelId=5&orgId=1&from=694242000000&to=1325394000000&tab=metrics&theme=light" width="100%" height="80%" frameborder="0"></iframe>
      </div>
    <div class="check">
    <br>
    <br>
    <br>
    <h3>
  Happiness vs internet usage
  <small class="text-muted">1990-2010</small>
</h3>
        
         <iframe src="http://localhost:3000/dashboard-solo/db/new-dashboard-copy?panelId=10&orgId=1&from=-315601200000&to=1325394000000&tab=general&theme=light" width="100%" height="50%" frameborder="0"></iframe>
        <iframe src="http://localhost:3000/dashboard-solo/db/new-dashboard-copy?orgId=1&from=-315601200000&to=1325394000000&panelId=11&theme=light" width="100%" height="50%" frameborder="0"></iframe>
        <p></p>
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
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Social Weather Station 2018</p>
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
