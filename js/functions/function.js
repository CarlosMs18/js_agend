import {formularioDatos, nombre ,numero ,  direccion} from '../helpers/selectors.js'
import ui from '../classes/UI.js'
import agenda from '../classes/agenda.js'
export function eventListener(){
    formularioDatos.addEventListener('submit', agregarAgenda)
}


function agregarAgenda(e){
    e.preventDefault()

    if(nombre.value === '' || numero.value === '' || direccion.value === ''){
        ui.mostrarErrores('Todos los datos son obligatorios')
        return 
    }

    const objAgenda = {
        nombre  : nombre.value,
        numero : numero.value,
        direccion : direccion.value
    }
    
    agenda.addAgenda(objAgenda)

    nombre.value  = ''
    numero.value = ''
    direccion.value = ''
    

    const {lista} = agenda

    ui.mostrarHTML(lista)
}
