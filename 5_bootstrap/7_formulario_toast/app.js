console.log("Hola")

const formulario =document.querySelector("#formu")
const botonEnvio =document.querySelector("#btnb")
const botonCarga =document.querySelector("#btns")
const toast =document.querySelector(".toast")



formulario.addEventListener("submit", e =>{
    // console.log("presionaste")
    e.preventDefault()

    const datos = new FormData(formulario)

    console.log("correo: " , datos.get("correo") )
    console.log("contraseña: " , datos.get("contra") )
    console.log("contraseña: " , datos.get("check") )

    botonEnvio.classList.add("d-none") /*aqui se pone y quita la clase d-none que es el que oculta botones en boostrap*/
    botonCarga.classList.remove("d-none")

    window.setTimeout(()=>{
        botonEnvio.classList.remove("d-none")
        botonCarga.classList.add("d-none")

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()


    },3000)

    formulario.reset()
})
