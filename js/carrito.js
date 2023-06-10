const articulo1 = document.getElementById('articulo-1')
const articulo2 = document.getElementById('articulo-2')
const articulo3 = document.getElementById('articulo-3')
const articulo4 = document.getElementById('articulo-4')

const x1 = document.getElementById('x-1')
const x2 = document.getElementById('x-2')
const x3 = document.getElementById('x-3')
const x4 = document.getElementById('x-4')

const precio0 = document.getElementById('precio0')
const precio1 = document.getElementById('precio1')
const precio2 = document.getElementById('precio2')
const precio3 = document.getElementById('precio3')
const precio4 = document.getElementById('precio4')

const seguir = document.getElementById('seguir')

const disabled = document.getElementById('boton-disabled')
const enabled = document.getElementById('boton-enabled')

let contador = 0

x1.addEventListener('click', borrar1)
x2.addEventListener('click', borrar2)
x3.addEventListener('click', borrar3)
x4.addEventListener('click', borrar4)


function borrar1(){
    articulo1.style.display  = 'none';
    contador ++;
    ccontador();
    precios();
}

function borrar2(){
    articulo2.style.display  = 'none';
    contador ++;
    ccontador();
    precios();

}

function borrar3(){
    articulo3.style.display  = 'none';
    contador ++;
    ccontador();
    precios();
}

function borrar4(){
    articulo4.style.display  = 'none';
    contador ++;
    ccontador();
    precios();
}

function ccontador(){
   if(contador == 4){
    seguir.style.display  = 'block';
    precio1.style.display  = 'none';
    precio0.style.display  = 'block';
    enabled.style.display  = 'none';
    disabled.style.display  = 'block';
   }
}

function precios(){
    if(contador == 1){
        precio4.style.display  = 'none';
        precio3.style.display  = 'block';
    }
    if(contador == 2){
        precio3.style.display  = 'none';
        precio2.style.display  = 'block';
    }
    if(contador == 3){
        precio2.style.display  = 'none';
        precio1.style.display  = 'block';
    }
}
