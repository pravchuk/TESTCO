var qid,userid,testid;
var marking;

function loadAnswers()
{
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
	  
      //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	  //console.log(xmlhttp.responseText);
      //var obj = eval ("(" +xmlhttp.responseText+ " )");;
	  try
	{
	  var obj = JSON.parse(xmlhttp.responseText);
	  //console.log(obj);
      document.getElementById("quest").innerHTML=obj.ques;
	  document.getElementById("answer").innerHTML=obj.ans;
	  testid=obj.testId;
	  userid=obj.userId;
	  qid=obj.qid;
	}
	 catch(exc)
	 {
		window.alert("No question to be evaluated");
	}
	  
      
	  }
    }

  xmlhttp.open("GET","evalsPagerequest.php?userId=a1&testId=t1",true);
  xmlhttp.send();
}
function pushMarks()
{
	marking=document.getElementById("mark").value;
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
     // var obj = eval ("(" +xmlhttp.responseText+ ")");;
	  //console.log(obj);
      
      }
    }

  xmlhttp.open("GET","evalsPageResponse.php?userId="+userid+"&testId="+testid+"&qid="+qid+"&marks="+marking,true);
  xmlhttp.send();
}