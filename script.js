// your code here
var url = document.getElementById("url").textContent;

function sharableURL() {
	var nameElement = document.getElementById("name").value;
	var yearElement = document.getElementById("year").value;
	if(nameElement&&yearElement){
		url="https://localhost:8080/?name="+nameElement+"&year="+yearElement;
		document.getElementById("url").textContent = url;
	}
	else if(nameElement&&!yearElement){
		url="https://localhost:8080/?name="+nameElement;
		document.getElementById("url").textContent = url;
	}
	else if(yearElement&&!nameElement){
		url="https://localhost:8080/?year="+yearElement;
		document.getElementById("url").textContent = url;
	}
	else{
		url="https://localhost:8080/";
		document.getElementById("url").textContent = url;
	}
}

document.getElementById("submit").addEventListener("click",sharableURL);