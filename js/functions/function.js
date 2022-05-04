import {formularioDatos, nombre ,numero ,  direccion, listadoTareas} from '../helpers/selectors.js'
import ui from '../classes/UI.js'
import agenda from '../classes/agenda.js'



export function eventListener(){
    document.addEventListener('DOMContentLoaded',recargarRecursos)
    formularioDatos.addEventListener('submit', agregarAgenda)
    listadoTareas.addEventListener('click',eliminarContacto)
}


function agregarAgenda(e){
    e.preventDefault()

    if(nombre.value === '' || numero.value === '' || direccion.value === ''){
        ui.mostrarErrores('Todos los datos son obligatorios')
        return 
    }

    const objAgenda = {
        id : Date.now(),
        nombre  : nombre.value,
        numero : numero.value,
        direccion : direccion.value
    }
    
    agenda.addAgenda(objAgenda)
    formularioDatos.reset()
    

    const {lista} = agenda

    ui.mostrarHTML(lista)
}

function eliminarContacto(e){
    if(e.target.classList.contains('eliminar')){
        const idContact = e.target.getAttribute('data-id')
        agenda.eliminarContacto(idContact)
        const {lista} = agenda
        ui.mostrarHTML(lista)
    }
}


function recargarRecursos(){
    
    
    ui.mostrarHTML(agenda.lista)
}