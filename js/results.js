function loadResults()
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
//alert("yyy");
    xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      var obj = eval ("(" +xmlhttp.responseText+ ")");
	  //section wise scores
      document.getElementById("mcq").innerHTML=obj.mcq + "/80";
	  document.getElementById("dq").innerHTML=obj.dq + "/80";
	  document.getElementById("ddq").innerHTML=obj.ddq + "/80";
	  
	  //total score
	  m=parseInt(obj.mcq);
	  d=parseInt(obj.dq);
	  dd=parseInt(obj.ddq);
	  total=m+d+dd;
	  
	  document.getElementById("total").innerHTML="Your score in the mock test: "+total+"/240";
	  
      }
    }

  xmlhttp.open("POST","results.txt",true);
  xmlhttp.send();
}