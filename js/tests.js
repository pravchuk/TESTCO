function loadQuestions()
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
      {//document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      var obj = eval("(" +xmlhttp.responseText+ ")");
	  console.log(obj);
      document.getElementById("testQuestion").innerHTML=obj[0].quest;
	  //document.getElementById("option1").innerHTML=obj[0].opt1;
	  //document.getElementById("option2").innerHTML=obj[0].opt2;
	  //document.getElementById("option3").innerHTML=obj[0].opt3;
	  //document.getElementById("option4").innerHTML=obj[0].opt4;
      }
    }

  xmlhttp.open("GET","test.php",true);
  xmlhttp.send();
}
