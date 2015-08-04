function toggleMenu () {
	var menu = document.getElementById('menu-lateral');
	var contenido = document.getElementById('contenido');
	var titulo = document.getElementById('barra-titulo');
	var subtitulo = document.getElementById('barra-subtitulo');
	menu.classList.toggle('oculto');
	var boton = document.getElementById('hide-show');
	if (menu.classList.contains('oculto')) {
		//FULLSCREEN
		boton.innerHTML="Mostrar";
		menu.classList.remove('alto-total');
		menu.classList.add('sombra');
		contenido.style.width="96vw";
		contenido.style.marginLeft="2vw";
		contenido.style.marginRight="2vw";
		titulo.style.marginTop="-100vw";
		subtitulo.style.marginTop="-100vw";
	} else{
		//NAVEGACION
		boton.innerHTML="Ocultar";
		menu.classList.remove('sombra');
		menu.classList.add('alto-total');
		contenido.style.width="76vw";
		titulo.style.marginTop="0px";
		subtitulo.style.marginTop="0px";
		contenido.style.marginLeft="0px";
		contenido.style.marginRight="20px";

		contenido.style.transition=".2s all";
		titulo.style.transition=".2s all";
		subtitulo.style.transition=".2s all";
	}
}


//QUITAA EVENTO POR DEFAULT DEL DROP
function permitirDrop(ev){
	ev.preventDefault();
	document.getElementById('bin').style.color="#D15858";
	document.getElementById('bin').style.borderColor="#D15858";
	document.getElementById('bin').style.transition=".5s all";
}

//EN EL DRAGSTART COLOCAMOS EL DATA, QUE ES EL ELEMENTO Y GUARDAMOS EL ID MATERIA
function dragInsertarMateria(ev,idMateria){
	ev.dataTransfer.setData("Text",ev.target.id);
	materia = document.getElementById(idMateria);
	// console.log(materia);
}

//EN EL DROP, SE OBTIENE LA DATA Y SE LE AGREGA LA CLASE DROPPED
function dropMateria(ev){
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	materia.classList.add('dropped');


}

//
function regresarMateria(ev){
	ev.preventDefault();
}

function dropRegresarMateria(ev){
	var data=ev.dataTransfer.getData("Text");
	document.getElementById('clases').appendChild(document.getElementById(data));
	materia.classList.remove('dropped');
	
}

function soltarMateria(){
	document.getElementById('bin').style.transition=".5s all";
	document.getElementById('bin').style.color="#E2E2E2";
	document.getElementById('bin').style.borderColor="#E2E2E2";
}


function filtro(plan, filtro){

	if (filtro == 'm') {
		contenedor = document.getElementById('maestros');
	}else{
		contenedor = document.getElementById('clases');
	}

	filtroClases = new XMLHttpRequest();

	filtroClases.onreadystatechange = function(){
		if (filtroClases.readyState==4 && filtroClases.status ==200) {
			contenedor.innerHTML=filtroClases.responseText;
		}
	}

	filtroClases.open('GET', 'filtro.php?plan='+plan+'&filtro='+filtro, true);
	filtroClases.send();
}
