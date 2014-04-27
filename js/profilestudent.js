function loadStudentProfiles()
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
      var obj = eval ("(" +xmlhttp.responseText+ ")");
	 // document.getElementByID("image").innerHTML = obj.image;
	  document.getElementById("name").innerHTML = obj.name;
	  document.getElementById("place").innerHTML = obj.place;
      document.getElementById("about").innerHTML ="Email: " + obj.about.email + "</br>"
	  }
    }

  xmlhttp.open("GET","tempprofiles.php",true);
  xmlhttp.send();
  
}
