<style>
body {
    background-color: lightblue;
}

h1{
    color: black;
}

#overlay{
    background-color: white;
    margin-right: 10%;
    margin-left:10%;
}
#logo{
    width:100%;
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.navbar {
    overflow: hidden;
    background-color: #333;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.dropdown {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn {
    font-size: 16px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
</head>
<body>

<div id="overlay">

<img src="home.jpg" id="logo">

<div class="navbar">
  <a href="index.php">Home</a>
  <a href="#">check</a>
  <a href="#news">World Bank data</a>
  <div class="dropdown">
    <button class="dropbtn">Stocks 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="djia.php">DJIA</a>
      <a href="#SP500">SP500</a>
      <a href="#">NASDAQ</a>
      <a href="#">RUSSELL1000</a>
    </div>
    
  </div> 
</div>

<h1>Let's have a look at Dow and Jones vs SP500 vs the internet usage. It shows a linear growth.</h1>

<iframe src="http://localhost:3000/d-solo/TplmhBkmz/new-dashboard-copy?panelId=4&orgId=1&tab=general&from=-315590400000&to=1522114030599" width="550" height="500" frameborder="0"></iframe>
    <iframe src="http://localhost:3000/d-solo/TplmhBkmz/new-dashboard-copy?panelId=8&orgId=1&tab=metrics&from=-315590400000&to=1522115890981" width="550" height="500" frameborder="0"></iframe>
    </div>
