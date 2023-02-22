// your code here
var url = document.getElementById("url").textContent;

function sharableURL() {
	var nameElement = document.getElementById("name").value;
	var yearElement = document.getElementById("year").value;
	if(nameElement&&yearElement){
		url=url+"?name="+nameElement+"&year="+yearElement;
		document.getElementById("url").textContent = url;
	}
	else if(nameElement){
		url=url+"?name="+nameElement;
		document.getElementById("url").textContent = url;
	}
	else if(yearElement){
		url=url+"?year="+yearElement;
		document.getElementById("url").textContent = url;
	}
}

document.getElementById("submit").addEventListener("click",sharableURL);