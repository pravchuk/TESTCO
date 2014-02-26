function bodyLoaded(){
	$("#header").load("header.html"); 
}

function addTemplate(){
	bodyLoaded();
}

//keep this function last
function allEvents(){
	addTemplate();
	
	//rest of the events
}
document.addEventListener('load',allEvents,true);