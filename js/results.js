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
    var obj = eval("(" +xmlhttp.responseText+ ")");
	
	//console.log(obj);
		//console.log(xmlhttp.responseText);
	  //section wise scores
	  var total=obj.mcqt+obj.dqt+obj.ddqt;
	  document.getElementById("name").innerHTML=obj.uname;
	  document.getElementById("total").innerHTML=(obj.mcq+obj.dq+obj.ddq) +"/"+total;
      document.getElementById("mcq").innerHTML=obj.mcq +"/"+obj.mcqt;
	  document.getElementById("dq").innerHTML=obj.dq +"/"+ obj.dqt;
	  document.getElementById("ddq").innerHTML=obj.ddq + "/"+obj.ddqt;
	  
	  //total score
	  m=parseInt(obj.mcq);
	  d=parseInt(obj.dq);
	  dd=parseInt(obj.ddq);
	  total=m+d+dd;
	  
	//  document.getElementById("total").innerHTML="Your score in the mock test: "+total+"/240";
	  
      }
    }

  xmlhttp.open("POST","results2.php",true);
  xmlhttp.send();
}