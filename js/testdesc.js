var questObj;
var answers = new Array ();
i=0;
prevqNo=0;
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

    xmlhttp.onreadystatechange=function() 
	{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      questObj = eval(xmlhttp.responseText);
      console.log(questObj);
      openQuestion(1);
      }
    }

  xmlhttp.open("GET","testdesc.php",true);
  xmlhttp.send();
}
function openQuestion(qNo)
{
	console.log("in open ques:"+qNo);
  if(qNo>0){
  
  document.getElementById('qNumber').innerHTML=qNo;
	val="answer"+qNo;
   console.log(val);
   changeColor(prevqNo);
  document.getElementById("testQuestion").innerHTML=questObj[qNo].quest;
  prevqNo=qNo;
  }
}
function changeColor(qNo)
{
		idn=document.getElementById(val);
		idn.setAttribute("class","btn btn-success");	
		answers[qNo]=document.getElementById("textans").value;
		console.log(answers);
}
function nextQuestion()
{
	var qNo = parseInt(document.getElementById('qNumber').innerHTML);
  //check limits  
  qNo+=1;
	console.log("in next question:"+qNo);
  openQuestion(qNo);
}

function prevQuestion(){
  var qNo = parseInt(document.getElementById('qNumber').innerHTML);
  //check limits
   qNo-=1;
  openQuestion(qNo);
}