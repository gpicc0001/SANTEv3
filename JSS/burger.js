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

