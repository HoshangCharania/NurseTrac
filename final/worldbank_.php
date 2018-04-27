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
              <a class="nav-link" href="#">Checker</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">World Bank Data</a>
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

    <!-- menu header -->
<div class="check">
  An overview of worldbank data
  <small class="text-muted">A brief summary</small>
</h3>
<iframe src="http://localhost:3000/dashboard-solo/db/normalized?orgId=1&from=-315601200000&to=1523298785807&theme=light&panelId=1" width="100%" height="100%" frameborder="0"></iframe>
</div>
    <!-- Page Content -->
<p>
        <h1>Worldbank Table</h1>
        <h2>The worldbank dataset contains 41 variables and each variables have its own functions.</h2>
<h3>
  Want to see a a detailed table of how energy use changed over these years?
</h3>
     </section>
   </p>
<iframe src="http://localhost:3000/dashboard-solo/db/co2-and-electric-use?orgId=1&panelId=1&from=-315601200000&to=1523335046215&theme=light" width=100% height=100% frameborder="0"></iframe>

<p>
</section>
  <iframe src="http://localhost:3000/dashboard-solo/db/agriculture-and-gdp-comparsion?orgId=1&panelId=1&from=-315601200000&to=1523336643097&theme=light" width=100% height=100% frameborder="0"></iframe>
<h4>conculsion: The trend of algriculture has a positive correlation with gpd growth rate</h4>
</p>

  </body>

</html>
