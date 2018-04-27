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
            <li class="nav-item active">
              <a class="nav-link" href="worldbank.php">World Bank Data</a>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="happiness.php">Happiness</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Internet Usage</a>
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
    <br>
    <br>
    <br>
    <h3>
 All the 41 world bank columns:
  <small class="text-muted">Pretty hard to make sense, so just shown the names with the current normalized values.</small>
</h3>
         <iframe src="http://thesocialweather.com:3000/d-solo/5GFpoCZik/trying-to-do-world-bank?panelId=6&orgId=1&from=-315601200000&to=1328635051626&tab=general&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>World Bank</h1>
        <p>World Bank is a pretty vague term, it gives you a general overview of the the population growth, the death rate, CO2 emissions, the GDP, and other functions. In all there are 41 functions for the worldbank. 
        
          </p>
       
      <h3>
  Want to see a a detailed table of the difference in internet usage?
  <small class="text-muted"><input type="button" value="Click here" id="geohash" onclick="change()"></small>
</h3>
      </div>
     </section>
    <div class="check1">
    
    
    <iframe src="http://thesocialweather.com:3000/d-solo/5GFpoCZik/trying-to-do-world-bank?panelId=8&orgId=1&from=-294895864726&to=1309077441156&tab=general&theme=light" width="100%" height="80%" frameborder="0"></iframe>
      </div>
    <div class="check">
    
    <h3>
  Power Consumption vs Internet vs Mobile Subscriptions vs DJIA
  <small class="text-muted">1994-2003</small>
</h3>
         <iframe src="http://thesocialweather.com:3000/d-solo/5GFpoCZik/trying-to-do-world-bank?panelId=4&orgId=1&from=-294895864726&to=1309077441156&tab=general&theme=light" width="100%" height="100%" frameborder="0"></iframe>
</div>
<section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>2-axis plot(Stocks vs Internet usage)</h1>
        <p>Let's look at a 2 axis plot of the Electric Consumption vs the internet vs the mobile subscription.
        
          </p>
       
      <h3>
          <small class="text-muted"></small>
</h3>
      </div>
     </section>
<div class="check">
    <br>
    <br>
    <br>
    <h3>
  Electric consumption vs Internet usage vs Mobile Subscription
  <small class="text-muted"></small>
</h3>
         <iframe src="http://thesocialweather.com:3000/d-solo/5GFpoCZik/trying-to-do-world-bank?panelId=10&orgId=1&from=631170000000&to=1262322000000&tab=general&theme=light" width="100%" height="50%" frameborder="0"></iframe>
         <iframe src="http://thesocialweather.com:3000/d-solo/5GFpoCZik/trying-to-do-world-bank?panelId=12&orgId=1&from=631170000000&to=1262322000000&tab=display&theme=light" width="100%" height="50%" frameborder="0"></iframe>
</div>
<section class="py-5">
      <div class="container">
        <br>
        <br>
        <br>
        <h1>Conclusion</h1>
        <p>By our analysis we can clearly see that there is a relation between Electric consumption vs Mobile Subscription and Internet Usage.
        <code>Social Weather.</code>
  </body>

</html>
