
let image = document.querySelector('img');
let button = document.querySelector('button');
let heading = document.querySelector('h1');
let a = false;

function set_name(){
	let name = prompt('Enter your name');
	if(!name) set_name();
	localStorage.setItem('name',name);
	heading.textContent = 'Doge Image ' + name;
}

if(!localStorage.getItem('name')){
	set_name();
}else{
	let saved_name = localStorage.getItem('name');
	heading.textContent = 'Doge Image ' + name;
}

image.onclick = function(){
	if(!a){
		a=1;
		image.setAttribute('src','images/angry-doge.jpg');
	}else{
		a=0;
		image.setAttribute('src','images/doge.jpg');
	}
}

button.onclick = set_name;
