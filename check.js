var windowName = 'userConsole'; 
var popUp = window.open('/client.html', windowName, 'width=1000, height=700, left=24, top=24, scrollbars, resizable');
if (popUp == null || typeof(popUp)=='undefined') {  
    alert('Please disable your pop-up blocker and click the "Open" link again.'); 
} 
else {  
window.location.replace("https://frostclient.rizefrostbite.repl.co/client.html")
	window.open("https://frostclient.rizefrostbite.repl.co/client.html");
}