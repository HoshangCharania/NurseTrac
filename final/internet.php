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
              <a class="nav-link" href="adbms">Stocks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="manmadedisasters.php">Man Made Disasters</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="worldbank.php">World Bank Data</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="happiness.php">Happiness</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Internet Usage</a>
              <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="data.html">Data Sources</a>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
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
  Does the internet usage affect the stocks?
  <small class="text-muted">A brief analysis</small>
</h3>
         <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?orgId=1&from=-315601200000&to=1325394000000&panelId=3&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>Internet</h1>
        <p>The internet did have a steep increase from 1995 to 2002. Let's see the stocks during that period. Let's check the stocks during 1994 to 2003 to see the stocks. Below I have plotted a graph which gives the average stock value per year from 1994 to 2003. 
        
          </p>
       
      <h3>
  Want to see a a detailed table of the difference in internet usage?
  <small class="text-muted"><input type="button" value="Click here" id="geohash" onclick="change()"></small>
</h3>
      </div>
     </section>
    <div class="check1">
    
    
    <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?orgId=1&panelId=5&from=-315601200000&to=1325394000000&theme=light" width="100%" height="80%" frameborder="0"></iframe>
      </div>
    <div class="check">
    
    <h3>
  Stocks
  <small class="text-muted">1994-2003</small>
</h3>
         <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?orgId=1&panelId=4&from=-315601200000&to=1325394000000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
<section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>2-axis plot(Stocks vs Internet usage)</h1>
        <p>Let's look at a 2 axis plot of the stocks vs the internet.
        
          </p>
       
      <h3>
  Want to see a a detailed table of the difference in internet usage?
  <small class="text-muted"><input type="button" value="Click here" id="geohash" onclick="change()"></small>
</h3>
      </div>
     </section>
<div class="check">
    <br>
    <br>
    <br>
    <h3>
  DJIA vs internet
  <small class="text-muted">1992-2010</small>
</h3>
         <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?orgId=1&panelId=6&from=-315601200000&to=1325394000000&theme=light" width="100%" height="50%" frameborder="0"></iframe>
         <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?orgId=1&panelId=7&from=-315601200000&to=1325394000000&theme=light" width="100%" height="50%" frameborder="0"></iframe>
</div>
<section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>Conclusion</h1>
        <p>By our analysis we can clearly see that there is a relation between an increase in internet usage and stock market rise.
        <code>Social Weather.</code>
        
          </p>
       
      </div>
     </section>      
    
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
