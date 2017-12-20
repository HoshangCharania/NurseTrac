
 
function openTab1()
    {
        window.location.assign("Overview.html");
    }
function openTab2()
    {
        window.location.assign("Task.html");
        window.scrollTo(0, 1000);
    }
function openTab3()
    {
        window.location.assign("Profile.html");
    }
function openActivity1()
	{
		window.location.assign("ActivityPg1.html");
	}
function addTask()
	{
		//To be filled
        //Display msg that task successfully added
	}
        var today = new Date();
        var day = today.getDay();
        day=day+1;
        var month = today.getMonth(); //January is 0!'
        month=month+1;
        var year=today.getFullYear();
                if(month=="1")
               {
            document.getElementById("month12").innerHTML="January";
                    daychange();
                }
            
            else if(month=="2")
                {
            document.getElementById("month12").innerHTML="February";
                  daychange();
                }
            else if(month=="3")
                {
            document.getElementById("month12").innerHTML="March";
                    daychange();
                }
            
            else if(month=="4")
                {
            document.getElementById("month12").innerHTML="April";
                    daychange();
                }
            else if(month=="5")
                {
            document.getElementById("month12").innerHTML="May";
                    daychange();
                }
            else if(month=="6")
                {
            document.getElementById("month12").innerHTML="June";
                    daychange();
                }
            else if(month=="7")
                {
            document.getElementById("month12").innerHTML="July";
                    daychange();
                }
            else if(month=="8")
                {
            document.getElementById("month12").innerHTML="August";
                    daychange();
                }
            else if(month=="9")
                {
            document.getElementById("month12").innerHTML="September";
                    daychange();
                }
            else if(month=="10")
                {
            document.getElementById("month12").innerHTML="October";
                    daychange();
                }
            else if(month=="11")
                {
            document.getElementById("month12").innerHTML="November";
                    daychange();
                }
            else if(month=="12")
                {
            document.getElementById("month12").innerHTML="December";
                    daychange();
                }
        
      /*  var year=2017;
        
        var month=1;
        var day=1;*/
        function datem(a)
        {
            month=a+month;
            
            if(month == "0")
                {
                    
                    month=12;
                  //  document.getElementById("txt").innerHTML=month;
                    document.getElementById("month12").innerHTML="December";
                    year=year-1;
                    document.getElementById("year12").innerHTML=year;
                }
            else if(month=="13")
                {
                    
                    month=1;
                 //   document.getElementById("txt").innerHTML=month;
                    document.getElementById("month12").innerHTML="January";
                    year=year+1;
                    document.getElementById("year12").innerHTML=year;
                    
                }
            
           
            if(month=="1")
                {
            document.getElementById("month12").innerHTML="January";
                    daychange();
                }
            
            else if(month=="2")
                {
            document.getElementById("month12").innerHTML="February";
                  daychange();
                }
            else if(month=="3")
                {
            document.getElementById("month12").innerHTML="March";
                    daychange();
                }
            
            else if(month=="4")
                {
            document.getElementById("month12").innerHTML="April";
                    daychange();
                }
            else if(month=="5")
                {
            document.getElementById("month12").innerHTML="May";
                    daychange();
                }
            else if(month=="6")
                {
            document.getElementById("month12").innerHTML="June";
                    daychange();
                }
            else if(month=="7")
                {
            document.getElementById("month12").innerHTML="July";
                    daychange();
                }
            else if(month=="8")
                {
            document.getElementById("month12").innerHTML="August";
                    daychange();
                }
            else if(month=="9")
                {
            document.getElementById("month12").innerHTML="September";
                    daychange();
                }
            else if(month=="10")
                {
            document.getElementById("month12").innerHTML="October";
                    daychange();
                }
            else if(month=="11")
                {
            document.getElementById("month12").innerHTML="November";
                    daychange();
                }
            else if(month=="12")
                {
            document.getElementById("month12").innerHTML="December";
                    daychange();
                }
           
            
        }
       
        
    function date(day12)
        {
            day=day12;
           // document.getElementById("txt").innerHTML=day;
        }
var value;
    function getDate(){
       value=year+"-"+month+"-"+day;
        document.getElementById("txt1").innerHTML=value;
    }
        function daychange()
        {
            //document.getElementById("txt").innerHTML="Changing the days"; 
            var value=month+"/"+day+"/"+year;
	         startDay = new Date(year, month-1, 1).getDay().toString();
             startMonth = new Date(year, month-1, 1).getMonth();
             /*document.getElementById("txt").innerHTML=startDay;*/
             /*document.getElementById("txt1").innerHTML=startMonth%2;*/
             if(startMonth%2!=0)
                 {
                     /*document.getElementById("txt2").innerHTML="31 days";*/
                     var totaldays=31;
                     if(startDay==1)
            { // 31 and 1
            document.getElementById("para1").innerHTML="";
            document.getElementById("para2").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>1</a>";
            document.getElementById("para2").onclick = function () { date(1);return false; };
            document.getElementById("para3").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>2</a>";
            document.getElementById("para3").onclick = function () { date(2);return false; };
            document.getElementById("para4").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>3</a>";
            document.getElementById("para4").onclick = function () { date(3);return false; };
            document.getElementById("para5").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>4</a>";
            document.getElementById("para5").onclick = function () { date(4);return false; };
            document.getElementById("para6").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>5</a>";
            document.getElementById("para6").onclick = function () { date(5);return false; };
            document.getElementById("para7").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>6</a>";
            document.getElementById("para7").onclick = function () { date(6);return false; };
            document.getElementById("para8").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>7</a>";
            document.getElementById("para8").onclick = function () { date(7);return false; };
            document.getElementById("para9").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>8</a>";
            document.getElementById("para9").onclick = function () { date(8);return false; };
            document.getElementById("para10").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>9</a>";
            document.getElementById("para10").onclick = function () { date(9);return false; };
            document.getElementById("para11").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>10</a>";
            document.getElementById("para11").onclick = function () { date(10);return false; };
            document.getElementById("para12").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>11</a>";
            document.getElementById("para12").onclick = function () { date(11);return false; };
            document.getElementById("para13").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>12</a>";
            document.getElementById("para13").onclick = function () { date(12);return false; };
            document.getElementById("para14").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>13</a>";
            document.getElementById("para14").onclick = function () { date(13);return false; };
            document.getElementById("para15").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>14</a>";
            document.getElementById("para15").onclick = function () { date(14);return false; };
            document.getElementById("para16").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>15</a>";
            document.getElementById("para16").onclick = function () { date(15);return false; };
            document.getElementById("para17").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>16</a>";
            document.getElementById("para17").onclick = function () { date(16);return false; };
            document.getElementById("para18").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>17</a>";
            document.getElementById("para18").onclick = function () { date(17);return false; };
            document.getElementById("para19").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>18</a>";
            document.getElementById("para19").onclick = function () { date(18);return false; };
            document.getElementById("para20").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>19</a>";
            document.getElementById("para20").onclick = function () { date(19);return false; };
            document.getElementById("para21").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>20</a>";
            document.getElementById("para21").onclick = function () { date(20);return false; };
            document.getElementById("para22").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>21</a>";
            document.getElementById("para22").onclick = function () { date(21);return false; };
            document.getElementById("para23").onclick = function () { date(22);return false; };
            document.getElementById("para23").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>22</a>";
            document.getElementById("para24").onclick = function () { date(23);return false; };
            document.getElementById("para24").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>23</a>";
            document.getElementById("para25").onclick = function () { date(24);return false; };
            document.getElementById("para25").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>24</a>";
            document.getElementById("para26").onclick = function () { date(25);return false; };
            document.getElementById("para26").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>25</a>";
            document.getElementById("para27").onclick = function () { date(26);return false; };
            document.getElementById("para27").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>26</a>";
            document.getElementById("para28").onclick = function () { date(27);return false; };
            document.getElementById("para28").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>27</a>";
            document.getElementById("para29").onclick = function () { date(28);return false; };
            document.getElementById("para29").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>28</a>";
            document.getElementById("para30").onclick = function () { date(29);return false; };
            document.getElementById("para30").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>29</a>";
            document.getElementById("para31").onclick = function () { date(30);return false; };
            document.getElementById("para31").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>30</a>";
            document.getElementById("para32").onclick = function () { date(31);return false; };
            document.getElementById("para32").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>31</a>";
            document.getElementById("para33").onclick = function () { date();return false; };
            document.getElementById("para33").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            }
                     else if(startDay==0){  // 31 and 0
            document.getElementById("para1").innerText="1";
            document.getElementById("para1").onclick = function () { date(1);return false; };
            document.getElementById("para2").innerText="2";
            document.getElementById("para2").onclick = function () { date(2);return false; };
            document.getElementById("para3").innerText="3";
            document.getElementById("para3").onclick = function () { date(3);return false; };
            document.getElementById("para4").innerText="4";
            document.getElementById("para4").onclick = function () { date(4);return false; };
            document.getElementById("para5").innerText="5";
            document.getElementById("para5").onclick = function () { date(5);return false; };
            document.getElementById("para6").innerText="6";
            document.getElementById("para6").onclick = function () { date(6);return false; };
            document.getElementById("para7").innerText="7";
            document.getElementById("para7").onclick = function () { date(7);return false; };
            document.getElementById("para8").innerText="8";
            document.getElementById("para8").onclick = function () { date(8);return false; };
            document.getElementById("para9").innerText="9";
            document.getElementById("para9").onclick = function () { date(9);return false; };
            document.getElementById("para10").innerText="10";
            document.getElementById("para10").onclick = function () { date(10);return false; };
            document.getElementById("para11").innerText="11";
            document.getElementById("para11").onclick = function () { date(11);return false; };
            document.getElementById("para12").innerText="12";
            document.getElementById("para12").onclick = function () { date(12);return false; };
            document.getElementById("para13").innerText="13";
            document.getElementById("para13").onclick = function () { date(13);return false; };
            document.getElementById("para14").innerText="14";
            document.getElementById("para14").onclick = function () { date(14);return false; };
            document.getElementById("para15").innerText="15";
            document.getElementById("para15").onclick = function () { date(15);return false; };
            document.getElementById("para16").innerText="16";
            document.getElementById("para16").onclick = function () { date(16);return false; };
            document.getElementById("para17").innerText="17";
            document.getElementById("para17").onclick = function () { date(17);return false; };
            document.getElementById("para18").innerText="18";
            document.getElementById("para18").onclick = function () { date(18);return false; };
            document.getElementById("para19").innerText="19";
            document.getElementById("para19").onclick = function () { date(19);return false; };
            document.getElementById("para20").innerText="20";
            document.getElementById("para20").onclick = function () { date(20);return false; };
            document.getElementById("para21").innerText="21";
            document.getElementById("para21").onclick = function () { date(21);return false; };
            document.getElementById("para22").innerText="22";
            document.getElementById("para22").onclick = function () { date(22);return false; };
            document.getElementById("para23").onclick = function () { date(23);return false; };
            document.getElementById("para23").innerText="23";
            document.getElementById("para24").onclick = function () { date(24);return false; };
            document.getElementById("para24").innerText="24";
            document.getElementById("para25").onclick = function () { date(25);return false; };
            document.getElementById("para25").innerText="25";
            document.getElementById("para26").onclick = function () { date(26);return false; };
            document.getElementById("para26").innerText="26";
            document.getElementById("para27").onclick = function () { date(27);return false; };
            document.getElementById("para27").innerText="27";
            document.getElementById("para28").onclick = function () { date(28);return false; };
            document.getElementById("para28").innerText="28";
            document.getElementById("para29").onclick = function () { date(29);return false; };
            document.getElementById("para29").innerText="29";
            document.getElementById("para30").onclick = function () { date(30);return false; };
            document.getElementById("para30").innerText="30";
            document.getElementById("para31").onclick = function () { date();return false; };
            document.getElementById("para31").innerText="31";
            document.getElementById("para32").onclick = function () { date();return false; };
            document.getElementById("para32").innerText="";
            document.getElementById("para33").onclick = function () { date();return false; };
            document.getElementById("para33").innerText="";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerText="";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                         
                     }
            else if(startDay==2) // 31 and 2
                {
                    document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="1";
            document.getElementById("para3").onclick = function () { date(1);return false; };
            document.getElementById("para4").innerText="2";
            document.getElementById("para4").onclick = function () { date(2);return false; };
            document.getElementById("para5").innerText="3";
            document.getElementById("para5").onclick = function () { date(3);return false; };
            document.getElementById("para6").innerText="4";
            document.getElementById("para6").onclick = function () { date(4);return false; };
            document.getElementById("para7").innerText="5";
            document.getElementById("para7").onclick = function () { date(5);return false; };
            document.getElementById("para8").innerText="6";
            document.getElementById("para8").onclick = function () { date(6);return false; };
            document.getElementById("para9").innerText="7";
            document.getElementById("para9").onclick = function () { date(7);return false; };
            document.getElementById("para10").innerText="8";
            document.getElementById("para10").onclick = function () { date(8);return false; };
            document.getElementById("para11").innerText="9";
            document.getElementById("para11").onclick = function () { date(9);return false; };
            document.getElementById("para12").innerText="10";
            document.getElementById("para12").onclick = function () { date(10);return false; };
            document.getElementById("para13").innerText="11";
            document.getElementById("para13").onclick = function () { date(11);return false; };
            document.getElementById("para14").innerText="12";
            document.getElementById("para14").onclick = function () { date(12);return false; };
            document.getElementById("para15").innerText="13";
            document.getElementById("para15").onclick = function () { date(13);return false; };
            document.getElementById("para16").innerText="14";
            document.getElementById("para16").onclick = function () { date(14);return false; };
            document.getElementById("para17").innerText="15";
            document.getElementById("para17").onclick = function () { date(15);return false; };
            document.getElementById("para18").innerText="16";
            document.getElementById("para18").onclick = function () { date(16);return false; };
            document.getElementById("para19").innerText="17";
            document.getElementById("para19").onclick = function () { date(17);return false; };
            document.getElementById("para20").innerText="18";
            document.getElementById("para20").onclick = function () { date(18);return false; };
            document.getElementById("para21").innerText="19";
            document.getElementById("para21").onclick = function () { date(19);return false; };
            document.getElementById("para22").innerText="20";
            document.getElementById("para22").onclick = function () { date(20);return false; };
            document.getElementById("para23").onclick = function () { date(21);return false; };
            document.getElementById("para23").innerText="21";
            document.getElementById("para24").onclick = function () { date(22);return false; };
            document.getElementById("para24").innerText="22";
            document.getElementById("para25").onclick = function () { date(23);return false; };
            document.getElementById("para25").innerText="23";
            document.getElementById("para26").onclick = function () { date(24);return false; };
            document.getElementById("para26").innerText="24";
            document.getElementById("para27").onclick = function () { date(25);return false; };
            document.getElementById("para27").innerText="25";
            document.getElementById("para28").onclick = function () { date(26);return false; };
            document.getElementById("para28").innerText="26";
            document.getElementById("para29").onclick = function () { date(27);return false; };
            document.getElementById("para29").innerText="27";
            document.getElementById("para30").onclick = function () { date(28);return false; };
            document.getElementById("para30").innerText="28";
            document.getElementById("para31").onclick = function () { date(29);return false; };
            document.getElementById("para31").innerText="29";
            document.getElementById("para32").onclick = function () { date(30);return false; };
            document.getElementById("para32").innerText="30";
            document.getElementById("para33").onclick = function () { date(31);return false; };
            document.getElementById("para33").innerText="31";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerText="";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }
                 else if(startDay==3) // 31 and 3
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="1";
            document.getElementById("para4").onclick = function () { date(1);return false; };
            document.getElementById("para5").innerText="2";
            document.getElementById("para5").onclick = function () { date(2);return false; };
            document.getElementById("para6").innerText="3";
            document.getElementById("para6").onclick = function () { date(3);return false; };
            document.getElementById("para7").innerText="4";
            document.getElementById("para7").onclick = function () { date(4);return false; };
            document.getElementById("para8").innerText="5";
            document.getElementById("para8").onclick = function () { date(5);return false; };
            document.getElementById("para9").innerText="6";
            document.getElementById("para9").onclick = function () { date(6);return false; };
            document.getElementById("para10").innerText="7";
            document.getElementById("para10").onclick = function () { date(7);return false; };
            document.getElementById("para11").innerText="8";
            document.getElementById("para11").onclick = function () { date(8);return false; };
            document.getElementById("para12").innerText="9";
            document.getElementById("para12").onclick = function () { date(9);return false; };
            document.getElementById("para13").innerText="10";
            document.getElementById("para13").onclick = function () { date(10);return false; };
            document.getElementById("para14").innerText="11";
            document.getElementById("para14").onclick = function () { date(11);return false; };
            document.getElementById("para15").innerText="12";
            document.getElementById("para15").onclick = function () { date(12);return false; };
            document.getElementById("para16").innerText="13";
            document.getElementById("para16").onclick = function () { date(13);return false; };
            document.getElementById("para17").innerText="14";
            document.getElementById("para17").onclick = function () { date(14);return false; };
            document.getElementById("para18").innerText="15";
            document.getElementById("para18").onclick = function () { date(15);return false; };
            document.getElementById("para19").innerText="16";
            document.getElementById("para19").onclick = function () { date(16);return false; };
            document.getElementById("para20").innerText="17";
            document.getElementById("para20").onclick = function () { date(17);return false; };
            document.getElementById("para21").innerText="18";
            document.getElementById("para21").onclick = function () { date(18);return false; };
            document.getElementById("para22").innerText="19";
            document.getElementById("para22").onclick = function () { date(19);return false; };
            document.getElementById("para23").onclick = function () { date(20);return false; };
            document.getElementById("para23").innerText="20";
            document.getElementById("para24").onclick = function () { date(21);return false; };
            document.getElementById("para24").innerText="21";
            document.getElementById("para25").onclick = function () { date(22);return false; };
            document.getElementById("para25").innerText="22";
            document.getElementById("para26").onclick = function () { date(23);return false; };
            document.getElementById("para26").innerText="23";
            document.getElementById("para27").onclick = function () { date(24);return false; };
            document.getElementById("para27").innerText="24";
            document.getElementById("para28").onclick = function () { date(25);return false; };
            document.getElementById("para28").innerText="25";
            document.getElementById("para29").onclick = function () { date(26);return false; };
            document.getElementById("para29").innerText="26";
            document.getElementById("para30").onclick = function () { date(27);return false; };
            document.getElementById("para30").innerText="27";
            document.getElementById("para31").onclick = function () { date(28);return false; };
            document.getElementById("para31").innerText="28";
            document.getElementById("para32").onclick = function () { date(29);return false; };
            document.getElementById("para32").innerText="29";
            document.getElementById("para33").onclick = function () { date(30);return false; };
            document.getElementById("para33").innerText="30";
            document.getElementById("para34").onclick = function () { date(31);return false; };
            document.getElementById("para34").innerText="31";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                } 
            else if(startDay==4) // 31 and 4
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="";
            document.getElementById("para4").onclick = function () { date();return false; };
            document.getElementById("para5").innerText="1";
            document.getElementById("para5").onclick = function () { date(1);return false; };
            document.getElementById("para6").innerText="2";
            document.getElementById("para6").onclick = function () { date(2);return false; };
            document.getElementById("para7").innerText="3";
            document.getElementById("para7").onclick = function () { date(3);return false; };
            document.getElementById("para8").innerText="4";
            document.getElementById("para8").onclick = function () { date(4);return false; };
            document.getElementById("para9").innerText="5";
            document.getElementById("para9").onclick = function () { date(5);return false; };
            document.getElementById("para10").innerText="6";
            document.getElementById("para10").onclick = function () { date(6);return false; };
            document.getElementById("para11").innerText="7";
            document.getElementById("para11").onclick = function () { date(7);return false; };
            document.getElementById("para12").innerText="8";
            document.getElementById("para12").onclick = function () { date(8);return false; };
            document.getElementById("para13").innerText="9";
            document.getElementById("para13").onclick = function () { date(9);return false; };
            document.getElementById("para14").innerText="10";
            document.getElementById("para14").onclick = function () { date(10);return false; };
            document.getElementById("para15").innerText="11";
            document.getElementById("para15").onclick = function () { date(11);return false; };
            document.getElementById("para16").innerText="12";
            document.getElementById("para16").onclick = function () { date(12);return false; };
            document.getElementById("para17").innerText="13";
            document.getElementById("para17").onclick = function () { date(13);return false; };
            document.getElementById("para18").innerText="14";
            document.getElementById("para18").onclick = function () { date(14);return false; };
            document.getElementById("para19").innerText="15";
            document.getElementById("para19").onclick = function () { date(15);return false; };
            document.getElementById("para20").innerText="16";
            document.getElementById("para20").onclick = function () { date(16);return false; };
            document.getElementById("para21").innerText="17";
            document.getElementById("para21").onclick = function () { date(17);return false; };
            document.getElementById("para22").innerText="18";
            document.getElementById("para22").onclick = function () { date(18);return false; };
            document.getElementById("para23").onclick = function () { date(19);return false; };
            document.getElementById("para23").innerText="19";
            document.getElementById("para24").onclick = function () { date(20);return false; };
            document.getElementById("para24").innerText="20";
            document.getElementById("para25").onclick = function () { date(21);return false; };
            document.getElementById("para25").innerText="21";
            document.getElementById("para26").onclick = function () { date(22);return false; };
            document.getElementById("para26").innerText="22";
            document.getElementById("para27").onclick = function () { date(23);return false; };
            document.getElementById("para27").innerText="23";
            document.getElementById("para28").onclick = function () { date(24);return false; };
            document.getElementById("para28").innerText="24";
            document.getElementById("para29").onclick = function () { date(25);return false; };
            document.getElementById("para29").innerText="25";
            document.getElementById("para30").onclick = function () { date(26);return false; };
            document.getElementById("para30").innerText="26";
            document.getElementById("para31").onclick = function () { date(27);return false; };
            document.getElementById("para31").innerText="27";
            document.getElementById("para32").onclick = function () { date(28);return false; };
            document.getElementById("para32").innerText="28";
            document.getElementById("para33").onclick = function () { date(29);return false; };
            document.getElementById("para33").innerText="29";
            document.getElementById("para34").onclick = function () { date(30);return false; };
            document.getElementById("para34").innerText="30";
            document.getElementById("para35").onclick = function () { date(31);return false; };
            document.getElementById("para35").innerText="31";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }   
            else if(startDay==5) // 31 and 5
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="";
            document.getElementById("para4").onclick = function () { date();return false; };
            document.getElementById("para5").innerText="";
            document.getElementById("para5").onclick = function () { date(1);return false; };
            document.getElementById("para6").innerText="1";
            document.getElementById("para6").onclick = function () { date(1);return false; };
            document.getElementById("para7").innerText="2";
            document.getElementById("para7").onclick = function () { date(2);return false; };
            document.getElementById("para8").innerText="3";
            document.getElementById("para8").onclick = function () { date(3);return false; };
            document.getElementById("para9").innerText="4";
            document.getElementById("para9").onclick = function () { date(4);return false; };
            document.getElementById("para10").innerText="5";
            document.getElementById("para10").onclick = function () { date(5);return false; };
            document.getElementById("para11").innerText="6";
            document.getElementById("para11").onclick = function () { date(6);return false; };
            document.getElementById("para12").innerText="7";
            document.getElementById("para12").onclick = function () { date(7);return false; };
            document.getElementById("para13").innerText="8";
            document.getElementById("para13").onclick = function () { date(8);return false; };
            document.getElementById("para14").innerText="9";
            document.getElementById("para14").onclick = function () { date(9);return false; };
            document.getElementById("para15").innerText="10";
            document.getElementById("para15").onclick = function () { date(10);return false; };
            document.getElementById("para16").innerText="11";
            document.getElementById("para16").onclick = function () { date(11);return false; };
            document.getElementById("para17").innerText="12";
            document.getElementById("para17").onclick = function () { date(12);return false; };
            document.getElementById("para18").innerText="13";
            document.getElementById("para18").onclick = function () { date(13);return false; };
            document.getElementById("para19").innerText="14";
            document.getElementById("para19").onclick = function () { date(14);return false; };
            document.getElementById("para20").innerText="15";
            document.getElementById("para20").onclick = function () { date(15);return false; };
            document.getElementById("para21").innerText="16";
            document.getElementById("para21").onclick = function () { date(16);return false; };
            document.getElementById("para22").innerText="17";
            document.getElementById("para22").onclick = function () { date(17);return false; };
            document.getElementById("para23").onclick = function () { date(18);return false; };
            document.getElementById("para23").innerText="18";
            document.getElementById("para24").onclick = function () { date(19);return false; };
            document.getElementById("para24").innerText="19";
            document.getElementById("para25").onclick = function () { date(20);return false; };
            document.getElementById("para25").innerText="20";
            document.getElementById("para26").onclick = function () { date(21);return false; };
            document.getElementById("para26").innerText="21";
            document.getElementById("para27").onclick = function () { date(22);return false; };
            document.getElementById("para27").innerText="22";
            document.getElementById("para28").onclick = function () { date(23);return false; };
            document.getElementById("para28").innerText="23";
            document.getElementById("para29").onclick = function () { date(24);return false; };
            document.getElementById("para29").innerText="24";
            document.getElementById("para30").onclick = function () { date(25);return false; };
            document.getElementById("para30").innerText="25";
            document.getElementById("para31").onclick = function () { date(26);return false; };
            document.getElementById("para31").innerText="26";
            document.getElementById("para32").onclick = function () { date(27);return false; };
            document.getElementById("para32").innerText="27";
            document.getElementById("para33").onclick = function () { date(28);return false; };
            document.getElementById("para33").innerText="28";
            document.getElementById("para34").onclick = function () { date(29);return false; };
            document.getElementById("para34").innerText="29";
            document.getElementById("para35").onclick = function () { date(30);return false; };
            document.getElementById("para35").innerText="30";
            document.getElementById("para36").onclick = function () { date(31);return false; };
            document.getElementById("para36").innerText="31";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }  
            else if(startDay==6) // 31 and 6
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="";
            document.getElementById("para4").onclick = function () { date();return false; };
            document.getElementById("para5").innerText="";
            document.getElementById("para5").onclick = function () { date();return false; };
            document.getElementById("para6").innerText="";
            document.getElementById("para6").onclick = function () { date();return false; };
            document.getElementById("para7").innerText="1";
            document.getElementById("para7").onclick = function () { date(1);return false; };
            document.getElementById("para8").innerText="2";
            document.getElementById("para8").onclick = function () { date(2);return false; };
            document.getElementById("para9").innerText="3";
            document.getElementById("para9").onclick = function () { date(3);return false; };
            document.getElementById("para10").innerText="4";
            document.getElementById("para10").onclick = function () { date(4);return false; };
            document.getElementById("para11").innerText="5";
            document.getElementById("para11").onclick = function () { date(5);return false; };
            document.getElementById("para12").innerText="6";
            document.getElementById("para12").onclick = function () { date(6);return false; };
            document.getElementById("para13").innerText="7";
            document.getElementById("para13").onclick = function () { date(7);return false; };
            document.getElementById("para14").innerText="8";
            document.getElementById("para14").onclick = function () { date(8);return false; };
            document.getElementById("para15").innerText="9";
            document.getElementById("para15").onclick = function () { date(9);return false; };
            document.getElementById("para16").innerText="10";
            document.getElementById("para16").onclick = function () { date(10);return false; };
            document.getElementById("para17").innerText="11";
            document.getElementById("para17").onclick = function () { date(11);return false; };
            document.getElementById("para18").innerText="12";
            document.getElementById("para18").onclick = function () { date(12);return false; };
            document.getElementById("para19").innerText="13";
            document.getElementById("para19").onclick = function () { date(13);return false; };
            document.getElementById("para20").innerText="14";
            document.getElementById("para20").onclick = function () { date(14);return false; };
            document.getElementById("para21").innerText="15";
            document.getElementById("para21").onclick = function () { date(15);return false; };
            document.getElementById("para22").innerText="16";
            document.getElementById("para22").onclick = function () { date(16);return false; };
            document.getElementById("para23").onclick = function () { date(17);return false; };
            document.getElementById("para23").innerText="17";
            document.getElementById("para24").onclick = function () { date(18);return false; };
            document.getElementById("para24").innerText="18";
            document.getElementById("para25").onclick = function () { date(19);return false; };
            document.getElementById("para25").innerText="19";
            document.getElementById("para26").onclick = function () { date(20);return false; };
            document.getElementById("para26").innerText="20";
            document.getElementById("para27").onclick = function () { date(21);return false; };
            document.getElementById("para27").innerText="21";
            document.getElementById("para28").onclick = function () { date(22);return false; };
            document.getElementById("para28").innerText="22";
            document.getElementById("para29").onclick = function () { date(23);return false; };
            document.getElementById("para29").innerText="23";
            document.getElementById("para30").onclick = function () { date(24);return false; };
            document.getElementById("para30").innerText="24";
            document.getElementById("para31").onclick = function () { date(25);return false; };
            document.getElementById("para31").innerText="25";
            document.getElementById("para32").onclick = function () { date(26);return false; };
            document.getElementById("para32").innerText="26";
            document.getElementById("para33").onclick = function () { date(27);return false; };
            document.getElementById("para33").innerText="27";
            document.getElementById("para34").onclick = function () { date(28);return false; };
            document.getElementById("para34").innerText="28";
            document.getElementById("para35").onclick = function () { date(29);return false; };
            document.getElementById("para35").innerText="29";
            document.getElementById("para36").onclick = function () { date(30);return false; };
            document.getElementById("para36").innerText="30";
            document.getElementById("para37").onclick = function () { date(31);return false; };
            document.getElementById("para37").innerText="31";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }
                 }
              else if(startMonth%2==0)
                  
                 {
                     /*document.getElementById("txt2").innerHTML="30 days";*/
                     var totaldays=30;
            if(startDay==1)
            { // 30 and 1
            document.getElementById("para1").innerHTML="";
            document.getElementById("para2").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>1</a>";
            document.getElementById("para2").onclick = function () { date(1);return false; };
            document.getElementById("para3").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>2</a>";
            document.getElementById("para3").onclick = function () { date(2);return false; };
            document.getElementById("para4").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>3</a>";
            document.getElementById("para4").onclick = function () { date(3);return false; };
            document.getElementById("para5").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>4</a>";
            document.getElementById("para5").onclick = function () { date(4);return false; };
            document.getElementById("para6").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>5</a>";
            document.getElementById("para6").onclick = function () { date(5);return false; };
            document.getElementById("para7").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>6</a>";
            document.getElementById("para7").onclick = function () { date(6);return false; };
            document.getElementById("para8").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>7</a>";
            document.getElementById("para8").onclick = function () { date(7);return false; };
            document.getElementById("para9").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>8</a>";
            document.getElementById("para9").onclick = function () { date(8);return false; };
            document.getElementById("para10").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>9</a>";
            document.getElementById("para10").onclick = function () { date(9);return false; };
            document.getElementById("para11").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>10</a>";
            document.getElementById("para11").onclick = function () { date(10);return false; };
            document.getElementById("para12").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>11</a>";
            document.getElementById("para12").onclick = function () { date(11);return false; };
            document.getElementById("para13").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>12</a>";
            document.getElementById("para13").onclick = function () { date(12);return false; };
            document.getElementById("para14").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>13</a>";
            document.getElementById("para14").onclick = function () { date(13);return false; };
            document.getElementById("para15").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>14</a>";
            document.getElementById("para15").onclick = function () { date(14);return false; };
            document.getElementById("para16").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>15</a>";
            document.getElementById("para16").onclick = function () { date(15);return false; };
            document.getElementById("para17").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>16</a>";
            document.getElementById("para17").onclick = function () { date(16);return false; };
            document.getElementById("para18").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>17</a>";
            document.getElementById("para18").onclick = function () { date(17);return false; };
            document.getElementById("para19").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>18</a>";
            document.getElementById("para19").onclick = function () { date(18);return false; };
            document.getElementById("para20").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>19</a>";
            document.getElementById("para20").onclick = function () { date(19);return false; };
            document.getElementById("para21").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>20</a>";
            document.getElementById("para21").onclick = function () { date(20);return false; };
            document.getElementById("para22").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>21</a>";
            document.getElementById("para22").onclick = function () { date(21);return false; };
            document.getElementById("para23").onclick = function () { date(22);return false; };
            document.getElementById("para23").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>22</a>";
            document.getElementById("para24").onclick = function () { date(23);return false; };
            document.getElementById("para24").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>23</a>";
            document.getElementById("para25").onclick = function () { date(24);return false; };
            document.getElementById("para25").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>24</a>";
            document.getElementById("para26").onclick = function () { date(25);return false; };
            document.getElementById("para26").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>25</a>";
            document.getElementById("para27").onclick = function () { date(26);return false; };
            document.getElementById("para27").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>26</a>";
            document.getElementById("para28").onclick = function () { date(27);return false; };
            document.getElementById("para28").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>27</a>";
            document.getElementById("para29").onclick = function () { date(28);return false; };
            document.getElementById("para29").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>28</a>";
            document.getElementById("para30").onclick = function () { date(29);return false; };
            document.getElementById("para30").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>29</a>";
            document.getElementById("para31").onclick = function () { date(30);return false; };
            document.getElementById("para31").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'>30</a>";
            document.getElementById("para32").onclick = function () { date(31);return false; };
            document.getElementById("para32").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para33").onclick = function () { date();return false; };
            document.getElementById("para33").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerHTML="<a id='para2' title='Click to do something' href='1' onclick='date(1);return false;'></a>";
            }
            else if(startDay==0)
            { // 30 and 0
            document.getElementById("para1").innerText="1";
            document.getElementById("para1").onclick = function () { date(1);return false; };
            document.getElementById("para2").innerText="2";
            document.getElementById("para2").onclick = function () { date(2);return false; };
            document.getElementById("para3").innerText="3";
            document.getElementById("para3").onclick = function () { date(3);return false; };
            document.getElementById("para4").innerText="4";
            document.getElementById("para4").onclick = function () { date(4);return false; };
            document.getElementById("para5").innerText="5";
            document.getElementById("para5").onclick = function () { date(5);return false; };
            document.getElementById("para6").innerText="6";
            document.getElementById("para6").onclick = function () { date(6);return false; };
            document.getElementById("para7").innerText="7";
            document.getElementById("para7").onclick = function () { date(7);return false; };
            document.getElementById("para8").innerText="8";
            document.getElementById("para8").onclick = function () { date(8);return false; };
            document.getElementById("para9").innerText="9";
            document.getElementById("para9").onclick = function () { date(9);return false; };
            document.getElementById("para10").innerText="10";
            document.getElementById("para10").onclick = function () { date(10);return false; };
            document.getElementById("para11").innerText="11";
            document.getElementById("para11").onclick = function () { date(11);return false; };
            document.getElementById("para12").innerText="12";
            document.getElementById("para12").onclick = function () { date(12);return false; };
            document.getElementById("para13").innerText="13";
            document.getElementById("para13").onclick = function () { date(13);return false; };
            document.getElementById("para14").innerText="14";
            document.getElementById("para14").onclick = function () { date(14);return false; };
            document.getElementById("para15").innerText="15";
            document.getElementById("para15").onclick = function () { date(15);return false; };
            document.getElementById("para16").innerText="16";
            document.getElementById("para16").onclick = function () { date(16);return false; };
            document.getElementById("para17").innerText="17";
            document.getElementById("para17").onclick = function () { date(17);return false; };
            document.getElementById("para18").innerText="18";
            document.getElementById("para18").onclick = function () { date(18);return false; };
            document.getElementById("para19").innerText="19";
            document.getElementById("para19").onclick = function () { date(19);return false; };
            document.getElementById("para20").innerText="20";
            document.getElementById("para20").onclick = function () { date(20);return false; };
            document.getElementById("para21").innerText="21";
            document.getElementById("para21").onclick = function () { date(21);return false; };
            document.getElementById("para22").innerText="22";
            document.getElementById("para22").onclick = function () { date(22);return false; };
            document.getElementById("para23").onclick = function () { date(23);return false; };
            document.getElementById("para23").innerText="23";
            document.getElementById("para24").onclick = function () { date(24);return false; };
            document.getElementById("para24").innerText="24";
            document.getElementById("para25").onclick = function () { date(25);return false; };
            document.getElementById("para25").innerText="25";
            document.getElementById("para26").onclick = function () { date(26);return false; };
            document.getElementById("para26").innerText="26";
            document.getElementById("para27").onclick = function () { date(27);return false; };
            document.getElementById("para27").innerText="27";
            document.getElementById("para28").onclick = function () { date(28);return false; };
            document.getElementById("para28").innerText="28";
            document.getElementById("para29").onclick = function () { date(29);return false; };
            document.getElementById("para29").innerText="29";
            document.getElementById("para30").onclick = function () { date(30);return false; };
            document.getElementById("para30").innerText="30";
            document.getElementById("para31").onclick = function () { date();return false; };
            document.getElementById("para31").innerText="";
            document.getElementById("para32").onclick = function () { date();return false; };
            document.getElementById("para32").innerText="";
            document.getElementById("para33").onclick = function () { date();return false; };
            document.getElementById("para33").innerText="";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerText="";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";   
                     }
                     else if(startDay==2)
                {  // 30 and 2
                    document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="1";
            document.getElementById("para3").onclick = function () { date(1);return false; };
            document.getElementById("para4").innerText="2";
            document.getElementById("para4").onclick = function () { date(2);return false; };
            document.getElementById("para5").innerText="3";
            document.getElementById("para5").onclick = function () { date(3);return false; };
            document.getElementById("para6").innerText="4";
            document.getElementById("para6").onclick = function () { date(4);return false; };
            document.getElementById("para7").innerText="5";
            document.getElementById("para7").onclick = function () { date(5);return false; };
            document.getElementById("para8").innerText="6";
            document.getElementById("para8").onclick = function () { date(6);return false; };
            document.getElementById("para9").innerText="7";
            document.getElementById("para9").onclick = function () { date(7);return false; };
            document.getElementById("para10").innerText="8";
            document.getElementById("para10").onclick = function () { date(8);return false; };
            document.getElementById("para11").innerText="9";
            document.getElementById("para11").onclick = function () { date(9);return false; };
            document.getElementById("para12").innerText="10";
            document.getElementById("para12").onclick = function () { date(10);return false; };
            document.getElementById("para13").innerText="11";
            document.getElementById("para13").onclick = function () { date(11);return false; };
            document.getElementById("para14").innerText="12";
            document.getElementById("para14").onclick = function () { date(12);return false; };
            document.getElementById("para15").innerText="13";
            document.getElementById("para15").onclick = function () { date(13);return false; };
            document.getElementById("para16").innerText="14";
            document.getElementById("para16").onclick = function () { date(14);return false; };
            document.getElementById("para17").innerText="15";
            document.getElementById("para17").onclick = function () { date(15);return false; };
            document.getElementById("para18").innerText="16";
            document.getElementById("para18").onclick = function () { date(16);return false; };
            document.getElementById("para19").innerText="17";
            document.getElementById("para19").onclick = function () { date(17);return false; };
            document.getElementById("para20").innerText="18";
            document.getElementById("para20").onclick = function () { date(18);return false; };
            document.getElementById("para21").innerText="19";
            document.getElementById("para21").onclick = function () { date(19);return false; };
            document.getElementById("para22").innerText="20";
            document.getElementById("para22").onclick = function () { date(20);return false; };
            document.getElementById("para23").onclick = function () { date(21);return false; };
            document.getElementById("para23").innerText="21";
            document.getElementById("para24").onclick = function () { date(22);return false; };
            document.getElementById("para24").innerText="22";
            document.getElementById("para25").onclick = function () { date(23);return false; };
            document.getElementById("para25").innerText="23";
            document.getElementById("para26").onclick = function () { date(24);return false; };
            document.getElementById("para26").innerText="24";
            document.getElementById("para27").onclick = function () { date(25);return false; };
            document.getElementById("para27").innerText="25";
            document.getElementById("para28").onclick = function () { date(26);return false; };
            document.getElementById("para28").innerText="26";
            document.getElementById("para29").onclick = function () { date(27);return false; };
            document.getElementById("para29").innerText="27";
            document.getElementById("para30").onclick = function () { date(28);return false; };
            document.getElementById("para30").innerText="28";
            document.getElementById("para31").onclick = function () { date(29);return false; };
            document.getElementById("para31").innerText="29";
            document.getElementById("para32").onclick = function () { date(30);return false; };
            document.getElementById("para32").innerText="30";
            document.getElementById("para33").onclick = function () { date();return false; };
            document.getElementById("para33").innerText="";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerText="";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }
            else if(startDay==3) // 30 and 3
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="1";
            document.getElementById("para4").onclick = function () { date(1);return false; };
            document.getElementById("para5").innerText="2";
            document.getElementById("para5").onclick = function () { date(2);return false; };
            document.getElementById("para6").innerText="3";
            document.getElementById("para6").onclick = function () { date(3);return false; };
            document.getElementById("para7").innerText="4";
            document.getElementById("para7").onclick = function () { date(4);return false; };
            document.getElementById("para8").innerText="5";
            document.getElementById("para8").onclick = function () { date(5);return false; };
            document.getElementById("para9").innerText="6";
            document.getElementById("para9").onclick = function () { date(6);return false; };
            document.getElementById("para10").innerText="7";
            document.getElementById("para10").onclick = function () { date(7);return false; };
            document.getElementById("para11").innerText="8";
            document.getElementById("para11").onclick = function () { date(8);return false; };
            document.getElementById("para12").innerText="9";
            document.getElementById("para12").onclick = function () { date(9);return false; };
            document.getElementById("para13").innerText="10";
            document.getElementById("para13").onclick = function () { date(10);return false; };
            document.getElementById("para14").innerText="11";
            document.getElementById("para14").onclick = function () { date(11);return false; };
            document.getElementById("para15").innerText="12";
            document.getElementById("para15").onclick = function () { date(12);return false; };
            document.getElementById("para16").innerText="13";
            document.getElementById("para16").onclick = function () { date(13);return false; };
            document.getElementById("para17").innerText="14";
            document.getElementById("para17").onclick = function () { date(14);return false; };
            document.getElementById("para18").innerText="15";
            document.getElementById("para18").onclick = function () { date(15);return false; };
            document.getElementById("para19").innerText="16";
            document.getElementById("para19").onclick = function () { date(16);return false; };
            document.getElementById("para20").innerText="17";
            document.getElementById("para20").onclick = function () { date(17);return false; };
            document.getElementById("para21").innerText="18";
            document.getElementById("para21").onclick = function () { date(18);return false; };
            document.getElementById("para22").innerText="19";
            document.getElementById("para22").onclick = function () { date(19);return false; };
            document.getElementById("para23").onclick = function () { date(20);return false; };
            document.getElementById("para23").innerText="20";
            document.getElementById("para24").onclick = function () { date(21);return false; };
            document.getElementById("para24").innerText="21";
            document.getElementById("para25").onclick = function () { date(22);return false; };
            document.getElementById("para25").innerText="22";
            document.getElementById("para26").onclick = function () { date(23);return false; };
            document.getElementById("para26").innerText="23";
            document.getElementById("para27").onclick = function () { date(24);return false; };
            document.getElementById("para27").innerText="24";
            document.getElementById("para28").onclick = function () { date(25);return false; };
            document.getElementById("para28").innerText="25";
            document.getElementById("para29").onclick = function () { date(26);return false; };
            document.getElementById("para29").innerText="26";
            document.getElementById("para30").onclick = function () { date(27);return false; };
            document.getElementById("para30").innerText="27";
            document.getElementById("para31").onclick = function () { date(28);return false; };
            document.getElementById("para31").innerText="28";
            document.getElementById("para32").onclick = function () { date(29);return false; };
            document.getElementById("para32").innerText="29";
            document.getElementById("para33").onclick = function () { date(30);return false; };
            document.getElementById("para33").innerText="30";
            document.getElementById("para34").onclick = function () { date();return false; };
            document.getElementById("para34").innerText="";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                } 
                     
            else if(startDay==4) // 30 and 4
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="";
            document.getElementById("para4").onclick = function () { date();return false; };
            document.getElementById("para5").innerText="1";
            document.getElementById("para5").onclick = function () { date(1);return false; };
            document.getElementById("para6").innerText="2";
            document.getElementById("para6").onclick = function () { date(2);return false; };
            document.getElementById("para7").innerText="3";
            document.getElementById("para7").onclick = function () { date(3);return false; };
            document.getElementById("para8").innerText="4";
            document.getElementById("para8").onclick = function () { date(4);return false; };
            document.getElementById("para9").innerText="5";
            document.getElementById("para9").onclick = function () { date(5);return false; };
            document.getElementById("para10").innerText="6";
            document.getElementById("para10").onclick = function () { date(6);return false; };
            document.getElementById("para11").innerText="7";
            document.getElementById("para11").onclick = function () { date(7);return false; };
            document.getElementById("para12").innerText="8";
            document.getElementById("para12").onclick = function () { date(8);return false; };
            document.getElementById("para13").innerText="9";
            document.getElementById("para13").onclick = function () { date(9);return false; };
            document.getElementById("para14").innerText="10";
            document.getElementById("para14").onclick = function () { date(10);return false; };
            document.getElementById("para15").innerText="11";
            document.getElementById("para15").onclick = function () { date(11);return false; };
            document.getElementById("para16").innerText="12";
            document.getElementById("para16").onclick = function () { date(12);return false; };
            document.getElementById("para17").innerText="13";
            document.getElementById("para17").onclick = function () { date(13);return false; };
            document.getElementById("para18").innerText="14";
            document.getElementById("para18").onclick = function () { date(14);return false; };
            document.getElementById("para19").innerText="15";
            document.getElementById("para19").onclick = function () { date(15);return false; };
            document.getElementById("para20").innerText="16";
            document.getElementById("para20").onclick = function () { date(16);return false; };
            document.getElementById("para21").innerText="17";
            document.getElementById("para21").onclick = function () { date(17);return false; };
            document.getElementById("para22").innerText="18";
            document.getElementById("para22").onclick = function () { date(18);return false; };
            document.getElementById("para23").onclick = function () { date(19);return false; };
            document.getElementById("para23").innerText="19";
            document.getElementById("para24").onclick = function () { date(20);return false; };
            document.getElementById("para24").innerText="20";
            document.getElementById("para25").onclick = function () { date(21);return false; };
            document.getElementById("para25").innerText="21";
            document.getElementById("para26").onclick = function () { date(22);return false; };
            document.getElementById("para26").innerText="22";
            document.getElementById("para27").onclick = function () { date(23);return false; };
            document.getElementById("para27").innerText="23";
            document.getElementById("para28").onclick = function () { date(24);return false; };
            document.getElementById("para28").innerText="24";
            document.getElementById("para29").onclick = function () { date(25);return false; };
            document.getElementById("para29").innerText="25";
            document.getElementById("para30").onclick = function () { date(26);return false; };
            document.getElementById("para30").innerText="26";
            document.getElementById("para31").onclick = function () { date(27);return false; };
            document.getElementById("para31").innerText="27";
            document.getElementById("para32").onclick = function () { date(28);return false; };
            document.getElementById("para32").innerText="28";
            document.getElementById("para33").onclick = function () { date(29);return false; };
            document.getElementById("para33").innerText="29";
            document.getElementById("para34").onclick = function () { date(30);return false; };
            document.getElementById("para34").innerText="30";
            document.getElementById("para35").onclick = function () { date();return false; };
            document.getElementById("para35").innerText="";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }
                     else if(startDay==5) // 30 and 5
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="";
            document.getElementById("para4").onclick = function () { date();return false; };
            document.getElementById("para5").innerText="";
            document.getElementById("para5").onclick = function () { date(1);return false; };
            document.getElementById("para6").innerText="1";
            document.getElementById("para6").onclick = function () { date(1);return false; };
            document.getElementById("para7").innerText="2";
            document.getElementById("para7").onclick = function () { date(2);return false; };
            document.getElementById("para8").innerText="3";
            document.getElementById("para8").onclick = function () { date(3);return false; };
            document.getElementById("para9").innerText="4";
            document.getElementById("para9").onclick = function () { date(4);return false; };
            document.getElementById("para10").innerText="5";
            document.getElementById("para10").onclick = function () { date(5);return false; };
            document.getElementById("para11").innerText="6";
            document.getElementById("para11").onclick = function () { date(6);return false; };
            document.getElementById("para12").innerText="7";
            document.getElementById("para12").onclick = function () { date(7);return false; };
            document.getElementById("para13").innerText="8";
            document.getElementById("para13").onclick = function () { date(8);return false; };
            document.getElementById("para14").innerText="9";
            document.getElementById("para14").onclick = function () { date(9);return false; };
            document.getElementById("para15").innerText="10";
            document.getElementById("para15").onclick = function () { date(10);return false; };
            document.getElementById("para16").innerText="11";
            document.getElementById("para16").onclick = function () { date(11);return false; };
            document.getElementById("para17").innerText="12";
            document.getElementById("para17").onclick = function () { date(12);return false; };
            document.getElementById("para18").innerText="13";
            document.getElementById("para18").onclick = function () { date(13);return false; };
            document.getElementById("para19").innerText="14";
            document.getElementById("para19").onclick = function () { date(14);return false; };
            document.getElementById("para20").innerText="15";
            document.getElementById("para20").onclick = function () { date(15);return false; };
            document.getElementById("para21").innerText="16";
            document.getElementById("para21").onclick = function () { date(16);return false; };
            document.getElementById("para22").innerText="17";
            document.getElementById("para22").onclick = function () { date(17);return false; };
            document.getElementById("para23").onclick = function () { date(18);return false; };
            document.getElementById("para23").innerText="18";
            document.getElementById("para24").onclick = function () { date(19);return false; };
            document.getElementById("para24").innerText="19";
            document.getElementById("para25").onclick = function () { date(20);return false; };
            document.getElementById("para25").innerText="20";
            document.getElementById("para26").onclick = function () { date(21);return false; };
            document.getElementById("para26").innerText="21";
            document.getElementById("para27").onclick = function () { date(22);return false; };
            document.getElementById("para27").innerText="22";
            document.getElementById("para28").onclick = function () { date(23);return false; };
            document.getElementById("para28").innerText="23";
            document.getElementById("para29").onclick = function () { date(24);return false; };
            document.getElementById("para29").innerText="24";
            document.getElementById("para30").onclick = function () { date(25);return false; };
            document.getElementById("para30").innerText="25";
            document.getElementById("para31").onclick = function () { date(26);return false; };
            document.getElementById("para31").innerText="26";
            document.getElementById("para32").onclick = function () { date(27);return false; };
            document.getElementById("para32").innerText="27";
            document.getElementById("para33").onclick = function () { date(28);return false; };
            document.getElementById("para33").innerText="28";
            document.getElementById("para34").onclick = function () { date(29);return false; };
            document.getElementById("para34").innerText="29";
            document.getElementById("para35").onclick = function () { date(30);return false; };
            document.getElementById("para35").innerText="30";
            document.getElementById("para36").onclick = function () { date();return false; };
            document.getElementById("para36").innerText="";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }  
                     else if(startDay==6) // 31 and 6
                {
            document.getElementById("para1").innerText="";
            document.getElementById("para1").onclick = function () { date();return false; };
            document.getElementById("para2").innerText="";
            document.getElementById("para2").onclick = function () { date();return false; };
            document.getElementById("para3").innerText="";
            document.getElementById("para3").onclick = function () { date();return false; };
            document.getElementById("para4").innerText="";
            document.getElementById("para4").onclick = function () { date();return false; };
            document.getElementById("para5").innerText="";
            document.getElementById("para5").onclick = function () { date();return false; };
            document.getElementById("para6").innerText="";
            document.getElementById("para6").onclick = function () { date();return false; };
            document.getElementById("para7").innerText="1";
            document.getElementById("para7").onclick = function () { date(1);return false; };
            document.getElementById("para8").innerText="2";
            document.getElementById("para8").onclick = function () { date(2);return false; };
            document.getElementById("para9").innerText="3";
            document.getElementById("para9").onclick = function () { date(3);return false; };
            document.getElementById("para10").innerText="4";
            document.getElementById("para10").onclick = function () { date(4);return false; };
            document.getElementById("para11").innerText="5";
            document.getElementById("para11").onclick = function () { date(5);return false; };
            document.getElementById("para12").innerText="6";
            document.getElementById("para12").onclick = function () { date(6);return false; };
            document.getElementById("para13").innerText="7";
            document.getElementById("para13").onclick = function () { date(7);return false; };
            document.getElementById("para14").innerText="8";
            document.getElementById("para14").onclick = function () { date(8);return false; };
            document.getElementById("para15").innerText="9";
            document.getElementById("para15").onclick = function () { date(9);return false; };
            document.getElementById("para16").innerText="10";
            document.getElementById("para16").onclick = function () { date(10);return false; };
            document.getElementById("para17").innerText="11";
            document.getElementById("para17").onclick = function () { date(11);return false; };
            document.getElementById("para18").innerText="12";
            document.getElementById("para18").onclick = function () { date(12);return false; };
            document.getElementById("para19").innerText="13";
            document.getElementById("para19").onclick = function () { date(13);return false; };
            document.getElementById("para20").innerText="14";
            document.getElementById("para20").onclick = function () { date(14);return false; };
            document.getElementById("para21").innerText="15";
            document.getElementById("para21").onclick = function () { date(15);return false; };
            document.getElementById("para22").innerText="16";
            document.getElementById("para22").onclick = function () { date(16);return false; };
            document.getElementById("para23").onclick = function () { date(17);return false; };
            document.getElementById("para23").innerText="17";
            document.getElementById("para24").onclick = function () { date(18);return false; };
            document.getElementById("para24").innerText="18";
            document.getElementById("para25").onclick = function () { date(19);return false; };
            document.getElementById("para25").innerText="19";
            document.getElementById("para26").onclick = function () { date(20);return false; };
            document.getElementById("para26").innerText="20";
            document.getElementById("para27").onclick = function () { date(21);return false; };
            document.getElementById("para27").innerText="21";
            document.getElementById("para28").onclick = function () { date(22);return false; };
            document.getElementById("para28").innerText="22";
            document.getElementById("para29").onclick = function () { date(23);return false; };
            document.getElementById("para29").innerText="23";
            document.getElementById("para30").onclick = function () { date(24);return false; };
            document.getElementById("para30").innerText="24";
            document.getElementById("para31").onclick = function () { date(25);return false; };
            document.getElementById("para31").innerText="25";
            document.getElementById("para32").onclick = function () { date(26);return false; };
            document.getElementById("para32").innerText="26";
            document.getElementById("para33").onclick = function () { date(27);return false; };
            document.getElementById("para33").innerText="27";
            document.getElementById("para34").onclick = function () { date(28);return false; };
            document.getElementById("para34").innerText="28";
            document.getElementById("para35").onclick = function () { date(29);return false; };
            document.getElementById("para35").innerText="29";
            document.getElementById("para36").onclick = function () { date(30);return false; };
            document.getElementById("para36").innerText="30";
            document.getElementById("para37").onclick = function () { date();return false; };
            document.getElementById("para37").innerText="";
            document.getElementById("para38").onclick = function () { date();return false; };
            document.getElementById("para38").innerText="";
            document.getElementById("para39").onclick = function () { date();return false; };
            document.getElementById("para39").innerText="";
            document.getElementById("para40").onclick = function () { date();return false; };
            document.getElementById("para40").innerText="";
            document.getElementById("para41").onclick = function () { date();return false; };
            document.getElementById("para41").innerText="";
            document.getElementById("para42").onclick = function () { date();return false; };
            document.getElementById("para42").innerText="";
                }
                 }
             
           
                 
               
            

                   
               
            
        }
        
  
    
    
    