var windowName = 'userConsole'; 
var popUp = window.open('/ojn.html', windowName, 'width=1000, height=700, left=24, top=24, scrollbars, resizable');
if (popUp == null || typeof(popUp)=='undefined') {
alert('Disable your pop-up blocker and try again')
} 
	
else {  
//window.open("https://frostclient.rizefrostbite.repl.co/client.html");

//window.location.replace("https://frostclient.rizefrostbite.repl.co/client.html")

 //let person = prompt("Please enter your name", "no hoes");

//window.open("https://frostclient.rizefrostbite.repl.co/client.html")

	let apiKey = 'be0f755b93290b4c100445d77533d291763a417c75524e95e07819ad';
$.getJSON('https://api.ipdata.co?api-key=' + apiKey, function(data) {
  console.log(JSON.stringify(data, null, 2));
});
}