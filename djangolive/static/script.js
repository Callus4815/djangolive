function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	}



 	var clickedTime; 
 	var createdTime;
 	var reactionTime;
 	
 	function makeBox(){
 		
 		var time = Math.random();
 		time=3000*time;

 		setTimeout(function(){

 			if (Math.random() > 0.5){
 				
 				document.getElementById("box").style.borderRadius="50%";

			} else {

				document.getElementById("box").style.borderRadius="0";	

			}
			var top = Math.random();

			top = top*300;

			var left = Math.random();

			left = left*500;


			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"px";	

 			document.getElementById("box").style.backgroundColor=getRandomColor();
 			
 			document.getElementById("box").style.display="block";

 			createdTime=Date.now();

 		}, time);
 	

 	}

 		document.getElementById("box").onclick=function(){
 		
 			clickedTime=Date.now();

 			reactionTime=(clickedTime-createdTime)/1000;

 		document.getElementById("time").innerHTML=reactionTime;
 		
 			this.style.display="none";

 		makeBox();
 	}

 	
 	var array = [];
	$('span').each(function () {
    array.push(this.innerHTML);
});
	console.log(array)

 	

 	

 	makeBox();
