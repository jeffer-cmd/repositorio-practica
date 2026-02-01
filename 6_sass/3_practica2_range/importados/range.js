console.log("hola")

const precio=document.getElementById("precio")
const visitas=document.getElementById("visitas")
const rango=document.getElementById("range3")
const Arrayvalores=["10K","50K","100K","500K","1M"]

rango.addEventListener("input",()=>{
    console.log(rango.value)
    precio.textContent=rango.value
    visitas.textContent=Arrayvalores[(rango.value/8-1)]
})