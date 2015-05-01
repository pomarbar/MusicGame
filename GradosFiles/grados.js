var pn = 0;
var listaGrados = [];
var gr = 0;
var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
var fondo = {
	imagenURL: "fondoI.png",
	imagenOK: false
};
var subFondo = {
	imagenURL: "subFondoGrados.png",
	imagenOK: false
};
var cinta = {
	x:130,
	y:-120,
	imagenURL: "cinta.png",
	imagenOK: false
};
var grafGPreg = {
	x: 550,
	y: 90,
	imagenURL: "gradoP.png",
	imagenOK: false,
};
var grado1 = {
	x: -20,
	imagenURL: "grado1.png",
	imagenOK: false
};
var grado2 = {
	x: -20,
	imagenURL: "grado2.png",
	imagenOK: false
};
var grado3 = {
	x: -20,
	imagenURL: "grado3.png",
	imagenOK: false
};
var grado4 = {
	x: -20,
	imagenURL: "grado4.png",
	imagenOK: false
};
var grado5 = {
	x: -20,
	imagenURL: "grado5.png",
	imagenOK: false
};
var grado6 = {
	x: -20,
	imagenURL: "grado6.png",
	imagenOK: false
};
var grado7 = {
	x: -20,
	imagenURL: "grado7.png",
	imagenOK: false
};
var grado8 = {
	x: -20,
	imagenURL: "grado8.png",
	imagenOK: false
};
var piano = {
	imagen0URL: "pianoGrafColor.png",
	imagen0OK: false,
	imagen1URL: "pianoDo.png",
	imagen1OK: false,
	imagen2URL: "pianoRe.png",
	imagen2OK: false,
	imagen3URL: "pianoMi.png",
	imagen3OK: false,
	imagen4URL: "pianoFa.png",
	imagen4OK: false,
	imagen5URL: "pianoSol.png",
	imagen5OK: false,
	imagen6URL: "pianoLa.png",
	imagen6OK: false,
	imagen7URL: "pianoSi.png",
	imagen7OK: false,
	imagen8URL: "pianoDo8.png",
	imagen8OK: false
};

var Grado = function ()
{
	this.maximo = 5; //numero máximo de errores
	this.intentos = 0;//intentos de usuario
	this.vivo = true;//
	this.dibujar(); //Esta funcion se implementa con prototype así:
}

Grado.prototype.dibujar = function ()
{
	var canvas = document.getElementById("c");
	var dibujo = canvas.getContext("2d");
	//Capa 1: Fondo
	if (fondo.imagenOK) 
	{
		dibujo.drawImage(fondo.imagen, 0, 0);
	}
	if (subFondo.imagenOK) 
	{
		dibujo.drawImage(subFondo.imagen, 40, 20);
	}
	if (cinta.imagenOK) 
	{
		dibujo.drawImage(cinta.imagen, cinta.x, cinta.y);
	}
	if (grafGPreg.imagenOK) 
	{
		dibujo.drawImage(grafGPreg.imagen, grafGPreg.x, grafGPreg.y);
	}
	if (grado1.imagenOK) 
	{
		dibujo.drawImage(grado1.imagen, grado1.x, 410);
	}
	if (grado2.imagenOK) 
	{
		dibujo.drawImage(grado2.imagen, grado2.x, 370);
	}
	if (grado3.imagenOK) 
	{
		dibujo.drawImage(grado3.imagen, grado3.x, 330);
	}
	if (grado4.imagenOK) 
	{
		dibujo.drawImage(grado4.imagen, grado4.x, 290);
	}
	if (grado5.imagenOK) 
	{
		dibujo.drawImage(grado5.imagen, grado5.x, 250);
	}
	if (grado6.imagenOK) 
	{
		dibujo.drawImage(grado6.imagen, grado6.x, 210);
	}
	if (grado7.imagenOK) 
	{
		dibujo.drawImage(grado7.imagen, grado7.x, 170);
	}
	if (grado8.imagenOK) 
	{
		dibujo.drawImage(grado8.imagen, grado8.x, 130);
	}
	if (pn == 0 && piano.imagen0OK) 
	{
		dibujo.drawImage(piano.imagen0, -15, 128);
	}
	if (pn == 1 && piano.imagen1OK) 
	{
		dibujo.drawImage(piano.imagen1, -15, 128);
	}
	if (pn == 2 && piano.imagen2OK) 
	{
		dibujo.drawImage(piano.imagen2, -15, 128);
	}
	if (pn == 3 && piano.imagen3OK) 
	{
		dibujo.drawImage(piano.imagen3, -15, 128);
	}
	if (pn == 4 && piano.imagen4OK) 
	{
		dibujo.drawImage(piano.imagen4, -15, 128);
	}
	if (pn == 5 && piano.imagen5OK) 
	{
		dibujo.drawImage(piano.imagen5, -15, 128);
	}
	if (pn == 6 && piano.imagen6OK) 
	{
		dibujo.drawImage(piano.imagen6, -15, 128);
	}
	if (pn == 7 && piano.imagen7OK) 
	{
		dibujo.drawImage(piano.imagen7, -15, 128);
	}
	if (pn == 8 && piano.imagen8OK) 
	{
		dibujo.drawImage(piano.imagen8, -15, 128);
	}

}

function inicio()
{
	//canvas.width = 400; //Asi se puede redefinir en JS el tamaño del canvas
	//canvas.height = 300;

	gradoPreg = new Grado();

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	
	subFondo.imagen = new Image();
	subFondo.imagen.src = subFondo.imagenURL;
	subFondo.imagen.onload = confirmarSubFondo;
	
	cinta.imagen = new Image();
	cinta.imagen.src = cinta.imagenURL;
	cinta.imagen.onload = confirmarCinta;
	
	grafGPreg.imagen = new Image();
	grafGPreg.imagen.src = grafGPreg.imagenURL;
	grafGPreg.imagen.onload = confirmarGrafGPreg;

	grado1.imagen = new Image();
	grado1.imagen.src = grado1.imagenURL;
	grado1.imagen.onload = confirmarGrado1;

	grado2.imagen = new Image();
	grado2.imagen.src = grado2.imagenURL;
	grado2.imagen.onload = confirmarGrado2;

	grado3.imagen = new Image();
	grado3.imagen.src = grado3.imagenURL;
	grado3.imagen.onload = confirmarGrado3;

	grado4.imagen = new Image();
	grado4.imagen.src = grado4.imagenURL;
	grado4.imagen.onload = confirmarGrado4;

	grado5.imagen = new Image();
	grado5.imagen.src = grado5.imagenURL;
	grado5.imagen.onload = confirmarGrado5;

	grado6.imagen = new Image();
	grado6.imagen.src = grado6.imagenURL;
	grado6.imagen.onload = confirmarGrado6;

	grado7.imagen = new Image();
	grado7.imagen.src = grado7.imagenURL;
	grado7.imagen.onload = confirmarGrado7;

	grado8.imagen = new Image();
	grado8.imagen.src = grado8.imagenURL;
	grado8.imagen.onload = confirmarGrado8;

	piano.imagen0 = new Image();
	piano.imagen0.src = piano.imagen0URL;
	piano.imagen0.onload = confirmarPiano0;

	piano.imagen1 = new Image();
	piano.imagen1.src = piano.imagen1URL;
	piano.imagen1.onload = confirmarPiano1;

	piano.imagen2 = new Image();
	piano.imagen2.src = piano.imagen2URL;
	piano.imagen2.onload = confirmarPiano2;

	piano.imagen3 = new Image();
	piano.imagen3.src = piano.imagen3URL;
	piano.imagen3.onload = confirmarPiano3;

	piano.imagen4 = new Image();
	piano.imagen4.src = piano.imagen4URL;
	piano.imagen4.onload = confirmarPiano4;

	piano.imagen5 = new Image();
	piano.imagen5.src = piano.imagen5URL;
	piano.imagen5.onload = confirmarPiano5;

	piano.imagen6 = new Image();
	piano.imagen6.src = piano.imagen6URL;
	piano.imagen6.onload = confirmarPiano6;

	piano.imagen7 = new Image();
	piano.imagen7.src = piano.imagen7URL;
	piano.imagen7.onload = confirmarPiano7;

	piano.imagen8 = new Image();
	piano.imagen8.src = piano.imagen8URL;
	piano.imagen8.onload = confirmarPiano8;

	document.addEventListener("keydown", teclado);
	setTimeout("Animar()",500);//Inicia función de animación de sonido de entrada

	// Activa el boton para ejecutar script de seleccionar un nuevo sonido
	//b = document.getElementById("bot1");
	//b.addEventListener("onclick", NuevoSonido());
	// var audio = document.createElement("audio");
	// audio.controls = "";
	// audio.src = "Do#4.wav";
	// audio.play();

	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'EscalaDo.mp3');
	audioElement.play();
}

function NuevoSonido()
{
	pn = 0;
	grafGPreg.x = 550; // reubica sonido de pregunta
	grafGPreg.y = 90;
	cinta.y = -120; // reubica la sombra del sonido de pregunta
	setTimeout(AnimarSonPreg,15);
	gr = seleccionarGrado();       
}

function AnimarSonPreg()
{
	if (grafGPreg.x > 220) 
	{
		grafGPreg.x -= 5;
		gradoPreg.dibujar();
		setTimeout(AnimarSonPreg,15);
	}
}


function Animar()//Función para animar entrada de sonido de pregunta
{

	if (grado8.x < 130) 
	{
		if (grado1.x < 130)
		{
			grado1.x += 5;
			pn = 1;
		}
		if ((grado1.x > 125) && (grado2.x < 130))
		{
			grado2.x += 5;
			pn = 2;
		}
		if ((grado2.x > 125) && (grado3.x < 130))
		{
			grado3.x += 5;
			pn = 3;
		}
		if ((grado3.x > 125) && (grado4.x < 130))
		{
			grado4.x += 5;
			pn = 4;
		}
		if ((grado4.x > 125) && (grado5.x < 130))
		{
			grado5.x += 5;
			pn = 5;
		}
		if ((grado5.x > 125) && (grado6.x < 130))
		{
			grado6.x += 5;
			pn = 6;
		}
		if ((grado6.x > 125) && (grado7.x < 130))
		{
			grado7.x += 5;
			pn = 7;
		}
		if (grado7.x > 125)
		{
			grado8.x += 5;
			pn = 8;
		}
		gradoPreg.dibujar();
		setTimeout("Animar()",15);
	}
}

function teclado (datos)
{
	//Guarda el numero de la tecla oprimida
	var codigo = datos.keyCode;
	//alert(codigo); //muestra el keyCode de cualquier tecla que se este pulsando.

	if (codigo == teclas.UP && grafGPreg.y > 130 && grafGPreg.x == 220) 
	{
		grafGPreg.y -= 40;
		cinta.y = grafGPreg.y;
		if (cinta.y < 120)
		{
			cinta.y = -100;
		}
	}
	if (codigo == teclas.DOWN && grafGPreg.y < 410 && grafGPreg.x == 220) 
	{
		grafGPreg.y += 40;
		cinta.y = grafGPreg.y;
	}
	if (grafGPreg.y == 130) {
			pn = 8;
	}
	if (grafGPreg.y == 170) {
		pn = 7;
	}
	if (grafGPreg.y == 210) {
		pn = 6;
	}
	if (grafGPreg.y == 250) {
		pn = 5;
	}
	if (grafGPreg.y == 290) {
		pn = 4;
	}
	if (grafGPreg.y == 330) {
		pn = 3;
	}
	if (grafGPreg.y == 370) {
		pn = 2;
	}
	if (grafGPreg.y == 410) {
		pn = 1;
	}
	gradoPreg.dibujar();
}

function confirmarFondo ()
{
	fondo.imagenOK = true;
	gradoPreg.dibujar();	
}

function confirmarSubFondo ()
{
	subFondo.imagenOK = true;
}

function confirmarCinta ()
{
	cinta.imagenOK = true;
}

function confirmarGrafGPreg ()
{
	grafGPreg.imagenOK = true;
}

function confirmarGrado1 ()
{
	grado1.imagenOK = true;
}

function confirmarGrado2 ()
{
	grado2.imagenOK = true;
}

function confirmarGrado3 ()
{
	grado3.imagenOK = true;
}

function confirmarGrado4 ()
{
	grado4.imagenOK = true;
}

function confirmarGrado5 ()
{
	grado5.imagenOK = true;
}

function confirmarGrado6 ()
{
	grado6.imagenOK = true;
}

function confirmarGrado7 ()
{
	grado7.imagenOK = true;
}

function confirmarGrado8 ()
{
	grado8.imagenOK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano0 ()
{
	piano.imagen0OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano1 ()
{
	piano.imagen1OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano2 ()
{
	piano.imagen2OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano3 ()
{
	piano.imagen3OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano4 ()
{
	piano.imagen4OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano5 ()
{
	piano.imagen5OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano6 ()
{
	piano.imagen6OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano7 ()
{
	piano.imagen7OK = true;
	//gradoPreg.dibujar();
}

function confirmarPiano8 ()
{
	piano.imagen8OK = true;
	gradoPreg.dibujar();
}

function seleccionarGrado(){
	if (listaGrados.length < 1){
		listaGrados.splice(0,0,0,1,2,3,4,5,6,7);
	} 
	if (listaGrados.length == 1){
		var grado = listaGrados[0];
		listaGrados.splice(0,1);
	}else{
		var g = aleatorio(0,listaGrados.length);
		var grado = listaGrados[g];
		listaGrados.splice(g,1);
	}
	// var temp = escribirLista(listaGrados);
	// // document.write("Lista de grados = " + temp);
	// //alert("Grado seleccionado: " + grado);
	// var t = document.getElementsByTagName('h2')[0];
	// t.innerText = "Grado seleccionado = " + grado; 
	// var s = document.getElementsByTagName('h3')[0];
	// s.innerText = "Lista de grados = " + temp;
	if (typeof grado != 'undefined')
	{
		tocarGrado(grado);
	}
	return grado;
}

function evaluarRespuesta() {
	var son = gr + 1;
	var listaY = [410, 370, 330, 290, 250, 210, 170, 130];
	var posItemY = buscarItem(listaY, grafGPreg.y);
	var lisRom = ["I.", "II.", "III.", "IV.", "V.", "VI.", "VII.", "I agudo."];
	if (grafGPreg.x > 500) {
		alert("Para continuar pulsa el botón NUEVO SONIDO.");
	}else if (grafGPreg.y < 130) {
		alert("Para evaluar debes ubicar el sonido ? al frente de algún grado, utilizando los cursores abajo y arriba del teclado.");
	} else if(listaY[gr] == grafGPreg.y) {
			tocarGrado(posItemY);
			alert("¡Muy bien! sonó el grado " + lisRom[gr]);
			grafGPreg.x = 550;
			grafGPreg.y = 90;
			cinta.y = -120;
			pn = 0;
			gradoPreg.dibujar();
	}else{
			tocarGrado(posItemY);
			alert("Lo siento, no sonó el grado " + lisRom[posItemY] + "Inténtalo con otro.");
	}
}

function buscarItem(lista, valor){
var ind, pos;
for(ind=0; ind<lista.length; ind++)
   {
    if (lista[ind] == valor)
      break;
    }
pos = (ind < lista.length)? ind : -1;
return (pos);
}

function repetirGrado() {
	tocarGrado(gr);
}

function tocarGrado(grad)
 {
 	var audioElement = document.createElement('audio');
 	var listaSonidos = ['Do4.mp3', 'Re4.mp3', 'Mi4.mp3', 'Fa4.mp3', 'Sol4.mp3', 'La4.mp3', 'Si4.mp3', 'Do5.mp3'];
	audioElement.setAttribute('src', listaSonidos[grad]);
	audioElement.play();
 }
// Funcion que selecciona un número al azar dentro de un rango dado
function aleatorio(minimo, maximo) {
	var numero = Math.floor(Math.random() * (maximo - minimo + 1)+ minimo);
	return numero;
}
