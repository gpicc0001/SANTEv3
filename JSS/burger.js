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


//DESPLAZAMIENTO VERTICAL CARDS SERVICIOS

const tituloKinesio = document.getElementById('serviciosResponsive__tituloKinesiologia')
const containerKinesio = document.getElementById('serviciosResponsive__kinesiologia')

const tituloKinesioDepo = document.getElementById('serviciosResponsive__tituloKinesiologiaDeportiva')
const containerKinesioDepo = document.getElementById('serviciosResponsive__kinesiologiaDeportiva')

const tituloMEP = document.getElementById('serviciosResponsive__titulomepSportConcept')
const containerMEP = document.getElementById('serviciosResponsive__mepSportConcept')

const tituloSNA = document.getElementById('serviciosResponsive__tituloSnaIntegrativo')
const containerSNA = document.getElementById('serviciosResponsive__snaIntegrativo')





const cardsMovement1 = () => {

    if (containerKinesio.classList.contains('desplazamiento') && tituloKinesio.classList.contains('efectoTitulo')) {

        containerKinesio.classList.remove('desplazamiento')
        tituloKinesio.classList.remove('efectoTitulo')

    } else {
        containerKinesio.classList.add('desplazamiento')
        tituloKinesio.classList.add('efectoTitulo')        
    }
}

const cardsMovement2 = () => {
    if (containerKinesioDepo.classList.contains('desplazamiento') && tituloKinesioDepo.classList.contains('efectoTitulo')) {

        containerKinesioDepo.classList.remove('desplazamiento')
        tituloKinesioDepo.classList.remove('efectoTitulo')

    } else {
        containerKinesioDepo.classList.add('desplazamiento')
        tituloKinesioDepo.classList.add('efectoTitulo')
    }
}
const cardsMovement3 = () => {
    if (containerMEP.classList.contains('desplazamiento') && tituloMEP.classList.contains('efectoTitulo')) {

        containerMEP.classList.remove('desplazamiento')
        tituloMEP.classList.remove('efectoTitulo')

    } else {
        containerMEP.classList.add('desplazamiento')
        tituloMEP.classList.add('efectoTitulo')
    }
}

const cardsMovement4 = () => {
    if (containerSNA.classList.contains('desplazamiento') && tituloSNA.classList.contains('efectoTitulo')) {

        containerSNA.classList.remove('desplazamiento')
        tituloSNA.classList.remove('efectoTitulo')

    } else {

        containerSNA.classList.add('desplazamiento')
        tituloSNA.classList.add('efectoTitulo')
    }
}

tituloKinesio.addEventListener('click', cardsMovement1)
tituloKinesioDepo.addEventListener('click', cardsMovement2)
tituloMEP.addEventListener('click', cardsMovement3)
tituloSNA.addEventListener('click', cardsMovement4)

