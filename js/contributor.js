

//alert(qType.value);

function displayQtype()
{
	var qType = document.getElementById("questionType").value;
	//alert("In function");
	if(qType=="mcq")
	{
		alert("mcq");
		var input = document.createElement('TEXTAREA');
		input.setAttribute('name', 'post');
		input.setAttribute('maxlength', 5000);
		input.setAttribute('cols',80);
		input.setAttribute('rows', 40);
		//var button = document.createElement('BUTTON');
		document.getElementById("contributorRightSide").innerHTML= button;
	}
	else if(qType=="dq")
	{
		alert("dq");
	}
	else if(qType=="dqd")
	{
		alert("dqd");
	}
}

function mcq()
{
	alert("Mcq seelcted");
}