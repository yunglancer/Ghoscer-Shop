const bproductos = document.getElementById('bProductos')
const bshirt = document.getElementById('bShirt')
const bhoodie = document.getElementById('bHoodies')
const bofertas = document.getElementById('bOfertas')

const conts1 =  document.getElementById('contShirt1')
const conts2 =  document.getElementById('contShirt2')
const conth1 =  document.getElementById('contHoodie1')
const conth2 =  document.getElementById('contHoodie2')
const contof =  document.getElementById('contOfertas')

bproductos.addEventListener('click', productos)
bshirt.addEventListener('click', shirts)
bhoodie.addEventListener('click', hoodie)
bofertas.addEventListener('click', ofertas)

function productos(){
    bproductos.style.opacity = '0.5';
    bshirt.style.opacity = '1';
    bhoodie.style.opacity = '1';
    bofertas.style.opacity = '1';
    conts1.style.display = 'flex';
    conts2.style.display = 'flex';
    conth1.style.display = 'flex';
    conth2.style.display = 'flex';
    contof.style.display = 'none';
}

function shirts(){
    bproductos.style.opacity = '1';
    bshirt.style.opacity = '0.5';
    bhoodie.style.opacity = '1';
    bofertas.style.opacity = '1';
    conts1.style.display = 'flex';
    conts2.style.display = 'flex';
    conth1.style.display = 'none';
    conth2.style.display = 'none';
    contof.style.display = 'none';
}

function hoodie(){
    bproductos.style.opacity = '1';
    bshirt.style.opacity = '1';
    bhoodie.style.opacity = '0.5';
    bofertas.style.opacity = '1';
    conts1.style.display = 'none';
    conts2.style.display = 'none';
    conth1.style.display = 'flex';
    conth2.style.display = 'flex';
    contof.style.display = 'none';
}

function ofertas(){
    bproductos.style.opacity = '1';
    bshirt.style.opacity = '1';
    bhoodie.style.opacity = '1';
    bofertas.style.opacity = '0.5';
    conts1.style.display = 'none';
    conts2.style.display = 'none';
    conth1.style.display = 'none';
    conth2.style.display = 'none';
    contof.style.display = 'flex';
}


