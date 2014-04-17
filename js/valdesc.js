var qid,testid;


function loadQuestion()
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
	  
      document.getElementById("ques").innerHTML=obj.question;
	  document.getElementById("ans").innerHTML=obj.ca;
	  
	  testid=obj.testId;
	  //userid=obj.userId;
	  qid=obj.qid;
	}
	 catch(exc)
	 {
		window.alert("No question to be validated");
	}
	  
      
	  }
    }

  xmlhttp.open("GET","valdesc.php",true);
  xmlhttp.send();
}
function pushValid(v)
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
     // var obj = eval ("(" +xmlhttp.responseText+ ")");;
	  //console.log(obj);
      
      }
    }

  xmlhttp.open("GET","valmcqResponse.php?testId="+testid+"&qid="+qid+"&valid="+v,true);
  xmlhttp.send();
}