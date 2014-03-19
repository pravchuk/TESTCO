//ALL THE FUNCTION

function bodyLoaded(){
	$("#header").load("header.html");
	$("#footer").load("footer.html");
}

function addExtraCSSjs(){

	//setting section size
	$("section").css("height",$(window).height());
}

function addTemplate(){
	bodyLoaded();
	addExtraCSSjs();
}

//keep this function last
function allEvents(){
	addTemplate();
	//rest of the events
}

document.addEventListener('DOMContentLoaded',allEvents,true);