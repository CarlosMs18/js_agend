import {formularioDatos, nombre ,numero ,  direccion} from '../helpers/selectors.js'
import ui from '../classes/UI.js'
export function eventListener(){
    formularioDatos.addEventListener('submit', agregarAgenda)
}


function agregarAgenda(e){
    e.preventDefault()

    if(nombre.value === '' || numero.value === '' || direccion.value === ''){
        ui.mostrarErrores('Todos los datos son obligatorios')
        
    }

    
    console.log('a')
}
