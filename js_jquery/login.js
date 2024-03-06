function cargarUser(){
	let log = document.getElementById('login');
	let user = localStorage.getItem('usuario');
	if(user == null){
		log.innerHTML = '<a href="login.html"><button>Login</button></a>';
	}else{
		log.innerHTML = '<a href="usuario.html"><img alt="foto de perfil" src="imagenes/foto-perfil.jpeg" height="32px" width="32px" style="border-radius: 50%;"><br>'+ user + '</a>';
	}
}

function iniciarSesion(){
	let user = document.getElementById('user').value;
	let pass = document.getElementById('pass').value;
	if(user == "bloopgg" && pass == "lando"){
		localStorage.setItem('usuario', 'Bloop GG');
		window.location.href = "usuario.html";
	}else{
		document.getElementById('err').style.display = 'block';
	}
}

function logOut(){
	localStorage.removeItem('usuario');
	window.location.href = "index.html";
}