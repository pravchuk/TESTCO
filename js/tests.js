var questObj;

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
      document.getElementById("testQuestion").innerHTML=questObj[0].quest;
      document.getElementById('option1').innerHTML = questObj[0].opt1;
      document.getElementById('option2').innerHTML = questObj[0].opt2;
      document.getElementById('option3').innerHTML = questObj[0].opt3;
      document.getElementById('option4').innerHTML = questObj[0].opt4;
      }
    }

  xmlhttp.open("GET","test.txt",true);
  xmlhttp.send();
}

function openQuestion(qNo)
{
  document.getElementById("testQuestion").innerHTML=questObj[qNo].quest;
  document.getElementById('option1').innerHTML = questObj[qNo].opt1;
  document.getElementById('option2').innerHTML = questObj[qNo].opt2;
  document.getElementById('option3').innerHTML = questObj[qNo].opt3;
  document.getElementById('option4').innerHTML = questObj[qNo].opt4;
}

function nextQuestion(){
  var qNo = parseInt(document.getElementById('qNumber').innerHTML);
  //check limits

  openQuestion(qNo);
}


