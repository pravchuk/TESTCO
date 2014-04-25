function loginentry()
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
      var obj = eval ("(" +xmlhttp.responseText+ ")");
	 // document.getElementByID("image").innerHTML = obj.image;
	  document.getElementById("name").innerHTML = obj.name;
	  document.getElementById("place").innerHTML = obj.place;
      document.getElementById("about").innerHTML = "age: " + obj.about.age + "</br>" + "Education: " + obj.about.edu + "</br>" + "Current Employer: " + obj.about.curemp + "</br>" + "Email: " + obj.about.email + "</br>" + "Degree: " + obj.about.degree + "</br>" + "Projects: " + obj.about.projects;
      }
    }

  xmlhttp.open("GET","profiles.php",true);
  xmlhttp.send();
  
}
