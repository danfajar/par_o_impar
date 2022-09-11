const seleccionarPersonaje = document.getElementById("seleccionar-personaje")
const spanPersonaje = document.getElementById('nombre-personaje')
const sectionSeleccionarJugada = document.getElementById("seleccionar-jugada")
const inputBluey = document.getElementById("Bluey")
const inputBingo = document.getElementById("Bingo")



function iniciarJuego(){
   sectionSeleccionarJugada.style.display = "none"

   inputBluey.addEventListener('click', seleccionPersonaje)
   inputBingo.addEventListener('click', seleccionPersonaje)


}


function seleccionPersonaje(){    
    // let spanPersonaje = document.getElementById('nombre-personaje')
    if (inputBluey.checked) {
        console.log(`Seleccionaste a ${inputBluey.id}`)
        spanPersonaje.innerHTML = 'Bluey'        
     } else if (inputBingo.checked) {
        spanPersonaje.innerHTML = 'Bingo'
        console.log(`Seleccionaste a ${inputBingo.id}`)
     }
}

window.addEventListener('load', iniciarJuego)