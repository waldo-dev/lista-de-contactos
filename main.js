const nombre = document.querySelector(".nombre")
const numero = document.querySelector(".numero")
const direccion = document.querySelector(".direccion")
const agregar = document.querySelector(".agregar")

const listado = document.querySelector(".listado")

const db = window.localStorage

agregar.addEventListener("click", () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: numero.value
    }
    guardarContacto(db, contacto)
})
cargarContactos(db)