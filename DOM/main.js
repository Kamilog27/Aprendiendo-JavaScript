var cajas=document.getElementsByTagName('div');
//var cajas=document.getElementsByClassName('caja');
var primeracaja=document.getElementById('primeraCaja');
//cajas[0].textContent='Hola Mundo';
//cajas[0].innerHTML='<h1>Hola</h1>';
//primeraCaja.innerHTML='<u>Hola Mundo</u>';
//-----Creando Nodos---
//1-Crear Elemento
var caja=document.createElement('div');
//2-Crear un nodo de texto
var contenido=document.createTextNode('Hola Mundo');
//3-Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4-Agregar atributos a la caja
caja.setAttribute('class','caja naranja');
//5-Agregar el elemento al documento
// var contenedor=document.getElementById('contenedor');
// contenedor.appendChild(caja);

//----------Modificando la clase o id de un elemento
caja.id='primera';
caja.className='caja naranja';
//----Conociendo el elemento padre
var padre=cajas[0].parentNode;

//padre.insertBefore(caja,primeraCaja);
padre.replaceChild(caja,cajas[2]);
padre.removeChild(cajas[3]);
