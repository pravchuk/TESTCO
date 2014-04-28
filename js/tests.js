var questObj;
var ans = new Array();
var myarray=new Array();
i=0;
prevqNo=0;
function loadQuestions()
{
  var xmlhttp;
 // var prevqNo= 1;
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
   /*   for (var i=1; i<=Object.keys(questObj).length; i++)
      {
        legend = document.getElementById('answerLegend');

        //Creating the below node
        //"<button class='btn btn-normal' id='answer1' onclick='openQuestion(1);'>01.</button>";
        node=document.createElement("button");
        if(i<10){
          textnode=document.createTextNode("0"+String.valueOf(i));
        }else{
          textnode=document.createTextNode(String.valueOf(i));
        }
        node.appendChild(textnode);
        node.setAttribute("class", "btn btn-normal");
        node.setAttribute("id", "answer"+String.valueOf(i));
        node.setAttribute("onclick", "openQuestion("+String.valueOf(i)+");");
    //    document.getElementById("myList").appendChild(node);
     */ }
      }
    //}

  xmlhttp.open("GET","test.php",true);
  xmlhttp.send();
}

function openQuestion(qNo)
{
	console.log("in open ques:"+qNo);
  if(qNo>0){
  changeColor(prevqNo);
  document.getElementById('qNumber').innerHTML=qNo;
	val="answer"+qNo;
    idn=document.getElementById(val);
	if(myarray[qNo]!=undefined)
	{
		console.log("Entered here "+myarray);
		markAnswer(qNo);
	}
  document.getElementById("testQuestion").innerHTML=questObj[qNo].quest;
  document.getElementById('option1').innerHTML = questObj[qNo].opt1;
  document.getElementById('option2').innerHTML = questObj[qNo].opt2;
  document.getElementById('option3').innerHTML = questObj[qNo].opt3;
  document.getElementById('option4').innerHTML = questObj[qNo].opt4;
  prevqNo=qNo;
  }
}
function markAnswer(qNo)
{
	console.log("from mark:"+myarray);
	var radiobtn='opt'+myarray[qNo];
	document.getElementById(radiobtn).checked=true;
}
function changeColor(qNo)
{
	console.log(ans);
		console.log(qNo);
	if(document.getElementById('opt1').checked) 
	{
		myarray[qNo]=1;
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt1').checked=false;
		console.log(myarray);
				
	}
	else if(document.getElementById('opt2').checked)
	{
		myarray[qNo]=2;
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt2').checked=false;
		console.log(myarray);
	}
	else if(document.getElementById('opt3').checked)
	{
		myarray[qNo]=3;
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt3').checked=false;
		console.log(myarray);
	}
	else if(document.getElementById('opt4').checked)
	{
		myarray[qNo]=4;
		idn.setAttribute("class","btn btn-success");
		document.getElementById('opt4').checked=false;
		console.log(myarray);
	}
  
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
function results()
{
	//$_SESSION['result']=res;
	 window.open("../mockResult.html","_self");
}
function complete()
{
	
	var xmlhttp;
 // var prevqNo= 1;
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
		console.log(xmlhttp.responseText);
		res=xmlhttp.responseText;
      }
    //}
	}
	var str="what=post&";
	for (i in myarray)
	{
		str+=i+"="+myarray[i]+"&";
	}
	str+="size="+myarray.length;
	console.log(str);
  xmlhttp.open("POST","http://localhost/Testco/results.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(str);
 
}

//Drawing function

 // $(function() {
 //    $('#simple_sketch').sketch();
 //  });

//  $('#upload').click(function () {
//     $.post('/upload_image.php', { data: $('#myCanvas').get(0).toDataURL() }, function () {
//          alert('uploaded');
//     });
// });


//countdown timer
function countDown(count){

  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  var timer = function()
  {
    count=count-1;
    if (count <= 0)
    {
       clearInterval(counter);
       //counter ended, do something here
       return;
    }
    document.getElementById('CountDown').innerHTML = count;

    //Do code for showing the number of seconds here
  }
}


