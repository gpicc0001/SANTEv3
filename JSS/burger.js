//MENU BURGUER

const navBurger = document.getElementById('navBurger')
const abrirBurger = document.getElementById('abrirBurger')
const cerrarBurger = document.getElementById('cerrarBurger')

abrirBurger.addEventListener('click', ()=>{
    console.log('click');
    navBurger.classList.toggle('visible')
})

cerrarBurger.addEventListener('click', ()=>{
    navBurger.classList.remove('visible')
})

//scroll navbar

let ubicacionPrincipal = window.scrollY
let header = document.getElementById('header')

window.addEventListener('scroll', ()=> {
    let ubicacionActual = window.scrollY
    console.log(ubicacionActual);

    if (ubicacionPrincipal >= ubicacionActual) {
        header.style.top = '0px'
    } else {
        header.style.top = '-80px'
    }

    ubicacionPrincipal = ubicacionActual
})

const links = document.querySelectorAll('#links')

links.forEach((link) => {
    link.addEventListener('click', () => {
        console.log('clickClose');
        navBurger.classList.remove('visible')
    })
});

//Efecto imagenes sobreNosotros

const imagen1 = document.getElementById('imagen1')
const imagen2 = document.getElementById('imagen2')

const cargarImagen = (entradas, observador) => {
    console.log('ejecuta funcion');
    entradas.forEach((entrada) =>{
        console.log('empieza el IF');
        if(entrada.isIntersecting){
            console.log('se muestra la imagen');
            entrada.target.classList.add('visible')
        }else{
            // entrada.target.classList.remove('visible')

        }
    })

}

const observador = new IntersectionObserver(cargarImagen, {

    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3

})

observador.observe(imagen1)
observador.observe(imagen2)