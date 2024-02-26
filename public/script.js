// header
let btn_header = document.querySelector("#btn_header");
let nav = document.querySelector("#nav");
let header = document.querySelector("#header");
let btn_perfil = document.querySelector("#btn_perfil");
let separador = document.querySelector("#separador");

btn_header.addEventListener('click', () => {
    nav.classList.toggle("hidden")
    header.classList.toggle("shadow-lg")
    separador.classList.toggle("hidden")
    btn_perfil.classList.toggle("hidden")
})





// opciones tabla
let btn_tabla = document.querySelector("#btn_tabla");
let menu_opciones_tabla = document.querySelector("#menu_opciones_tabla");


btn_tabla.addEventListener('click', () => {
    menu_opciones_tabla.classList.toggle("hidden")
})




// esconder opciones de perfil cuando se hace click afuera
let menu = document.querySelector("#menu_perfil")

document.addEventListener('DOMContentLoaded', function () {

    btn_perfil.addEventListener('click', () => {
        menu.classList.toggle("hidden")
    })

    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickInsideToggleBtn = btn_perfil.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideToggleBtn) {
            menu.classList.add('hidden')
        }
    });

})






// funcion pantalla completa
let midocumento = document.documentElement;
let btn_full_pantalla = document.querySelector("#full-pantalla");
let full = document.querySelector("#full");
let close_pantalla = document.querySelector("#close");
btn_full_pantalla.addEventListener('click', () => {

    if (document.querySelector("#close.hidden")) {
        if (midocumento.requestFullscreen) {
            midocumento.requestFullscreen();
        } else if (midocumento.msrequestFullscreen) {
            midocumento.msrequestFullscreen();
        } else if (midocumento.mozrequestFullscreen) {
            midocumento.mozrequestFullscreen();
        } else if (midocumento.webkitrequestFullscreen) {
            midocumento.webkitrequestFullscreen();
        }

        close_pantalla.classList.remove("hidden")
        full.classList.add("hidden")
    }

    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msexitFullscreen) {
            document.msexitFullscreen();
        } else if (document.mozexitFullscreen) {
            document.mozexitFullscreen();
        } else if (document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
        full.classList.remove("hidden")
        close_pantalla.classList.add("hidden")
    }
})


// modal registrar producto

let btn = document.querySelector("#btn_modal");
let modal = document.querySelector("#modal");
let close = document.querySelector("#close-modal");
let cancelar = document.querySelector("#cancelar");

btn.addEventListener('click', () => {
    modal.classList.remove("hidden")
})

close.addEventListener('click', () => {
    modal.classList.add("hidden")
})

cancelar.addEventListener('click', () => {
    modal.classList.add("hidden")
})


// menu_filtro
let btn_filtro = document.querySelector("#filtro")
        let menu_filtro = document.querySelector("#menu-filtro")

        btn_filtro.addEventListener('click', ()=>{

            menu_filtro.classList.toggle("hidden")

        })


