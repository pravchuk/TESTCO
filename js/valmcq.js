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
	  console.log(xmlhttp.responseText);
      //var obj = eval ("(" +xmlhttp.responseText+ " )");;
	  try
	{
	  var obj = JSON.parse(xmlhttp.responseText);
	  //console.log(obj);
	  
      document.getElementById("mcq").innerHTML=obj.question;
	  document.getElementsByName('options')[0].nextSibling.nodeValue = obj.opt1;
	  document.getElementsByName('options')[1].nextSibling.nodeValue = obj.opt2;
	  document.getElementsByName('options')[2].nextSibling.nodeValue = obj.opt3;
	  document.getElementsByName('options')[3].nextSibling.nodeValue = obj.opt4;
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

  xmlhttp.open("POST","valmcq.php",true);
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

  xmlhttp.open("POST","valmcqresponse.php?testId="+testid+"&qid="+qid+"&valid="+v,true);
  xmlhttp.send();
}