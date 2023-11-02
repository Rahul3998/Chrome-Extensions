console.log("content script is active");

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.rahul){
			greenBackground();
		}
		switch(request.greeting){
			case "red": 
				redBackground();
				break;
			case "green": 
				greenBackground();
				break;
			case "blue": 
				blueBackground();
				break;
			default:
				break;
		}
	}
);


function redBackground(){
	document.body.style.backgroundColor = "red";
}

function greenBackground(){
	document.body.style.backgroundColor = "green";
}

function blueBackground(){
	document.body.style.backgroundColor = "blue";
}