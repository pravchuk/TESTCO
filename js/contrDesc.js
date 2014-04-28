function pushDesc()
{
	ques=document.getElementById("descQs").value;
	testId=document.getElementById("testid").value;
	marking=document.getElementById("descQsMks").value;
	ca=document.getElementById("descQsAns").value;
	tags=document.getElementById("tags").value;
	subject="Physics"

	
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
	  console.log(xmlhttp.responseText);
      
      }
    }
		//contrDesc.php?ca=rightans&marks=4&ques=what%20is%20the%20question&subj=subject&tags=tag1,tag2&testId=tid
  xmlhttp.open("POST","contrDesc.php?ca="+ca+"&marks="+marking+"&ques="+ques+"&subj="+subject+"&tags="+tags+"&testId="+testId,true);
  xmlhttp.send();
  location.reload();
}
function pushMcq()
{
	ques=document.getElementById("mcqQs").value;
	testId=document.getElementById("testid").value;
	marking=document.getElementById("mcqQsMks").value;
	ca=document.getElementById("mcqAns").value;
	tags=document.getElementById("tags").value;
	opt1=document.getElementById("mcqOpt1").value;
	opt2=document.getElementById("mcqOpt2").value;
	opt3=document.getElementById("mcqOpt3").value;
	opt4=document.getElementById("mcqOpt4").value;
	subject="Physics"

	
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
	  console.log(xmlhttp.responseText);
      
      }
    }
  //contrMcq.php?ca=ca&marks=marking&ques=ques&subj=subject&tags=tags&testId=testId&opt1=opt1&opt2=opt2&opt3=opt3&opt4=opt4
  
  xmlhttp.open("POST","contrMcq.php?ca="+ca+"&marks="+marking+"&ques="+ques+"&subj="+subject+"&tags="+tags+"&testId="+testId+"&opt1="+opt1+"&opt2="+opt2+"&opt3="+opt3+"&opt4="+opt4,true);
  xmlhttp.send();
  location.reload();
}