const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");	

/*
red.addEventListener("click",()=>{
	console.log("clicked on red");
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "red"});
		console.log(response);
	})();

})
green.addEventListener("click",()=>{
	console.log("clicked on green");
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "green"});
		console.log(response);
	})();
})

blue.addEventListener("click",()=>{
	console.log("clicked on blue");
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "blue"});
		console.log(response);
	})();
})
*/

red.onclick = ()=>{
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "red"});
		console.log(response);
	})();
}

green.onclick = ()=>{
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {rahul: "green"});
		console.log(response);
	})();
}

blue.onclick = ()=>{
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "blue"});
		console.log(response);
	})();
}








