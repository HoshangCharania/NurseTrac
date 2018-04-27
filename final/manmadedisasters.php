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
            <li class="nav-item active">
              <a class="nav-link" href="manmadedisasters.php">Man Made Disasters</a>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="worldbank.php">World Bank Data</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="happiness.php">Happiness</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="internet.php">Internet Usage</a>
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
  Different attacks over the years
  <small class="text-muted">With a brief summary</small>
</h3>
          <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?panelId=1&orgId=1&tab=metrics&from=-315601200000&to=1325394000000&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>Terrorism</h1>
        <p>Above we have shown the terrorist attacks which have taken place in the USA since 1960, with a brief summary for each dataset.
          <code>Social Weather Station.</code>
          </p>
      <h3>
  Want to see a a detailed table?
  <small class="text-muted"><input type="button" value="Click here" id="geohash" onclick="change()"></small>
</h3>
      </div>
     </section>
      
    <div class="check1">
    
    
    <iframe src="http://35.196.46.176:3000/d-solo/k8oMe-iik/social-weather?panelId=2&orgId=1&from=-315601200000&to=1325394000000&theme=light" id="tabgeo" width="100%" height="100%" frameborder="0"></iframe>
      </div>
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
