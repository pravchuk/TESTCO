var questObj;
var answers = new Array ();
i=0;
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
      {
      //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      questObj = eval(xmlhttp.responseText);
      console.log(questObj);
      openQuestion(1);
      }
    }

  xmlhttp.open("GET","test.php",true);
  xmlhttp.send();
}

function openQuestion(qNo)
{
  changeColor();
  document.getElementById('qNumber').innerHTML=qNo;
	val="answer"+qNo;
    idn=document.getElementById(val);
  document.getElementById("testQuestion").innerHTML=questObj[qNo].quest;
  document.getElementById('option1').innerHTML = questObj[qNo].opt1;
  document.getElementById('option2').innerHTML = questObj[qNo].opt2;
  document.getElementById('option3').innerHTML = questObj[qNo].opt3;
  document.getElementById('option4').innerHTML = questObj[qNo].opt4;
}
function changeColor()
{
	if(document.getElementById('opt1').checked) 
	{
				//answers['qNo']=
				idn.setAttribute("class","btn btn-success");
				document.getElementById('opt1').checked=false;
				
	}
	else if(document.getElementById('opt2').checked)
	{
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt2').checked=false;
	}
	else if(document.getElementById('opt3').checked)
	{
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt3').checked=false;
	}
	else if(document.getElementById('opt4').checked)
	{
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt4').checked=false;
	}
  
}
function nextQuestion()
{
	var qNo = parseInt(document.getElementById('qNumber').innerHTML);
  //check limits  
  qNo+=1;
  document.getElementById('qNumber').innerHTML=qNo;

  openQuestion(qNo);
}

function prevQuestion(){
  var qNo = parseInt(document.getElementById('qNumber').innerHTML);
  //check limits
   qNo-=1;
  document.getElementById('qNumber').innerHTML=qNo;
  openQuestion(qNo);
}