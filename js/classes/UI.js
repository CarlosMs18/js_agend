import {formularioDatos , listadoTareas} from '../helpers/selectors.js'
import agenda from './agenda.js'
class UI{
    constructor(){}

    mostrarErrores(mensaje){
        const alerta = document.querySelector('.alerta')
        if(!alerta){
            const p = document.createElement('p')
            p.classList.add('alerta')
            
            p.textContent = mensaje
            formularioDatos.appendChild(p)

            setTimeout(() => {
                p.remove()
            }, 2000);
        }
    }

    mostrarHTML(lista){
        this.limpiarHTML()
        lista.forEach(list => {
            const {id, nombre,  direccion, numero} = list
            listadoTareas.innerHTML += `
            <div class="tarea">
            <h3>${nombre}</h3>
            <p>${numero}</p>
            <p>${direccion}</p>
            <span class="material-icons icono eliminar" data-id ='${id}'>
                delete_forever
                </span>
                
            ` 

        })

        agenda.guardarLocalStorage()

    }

    limpiarHTML(){
        while(listadoTareas.firstChild){
            listadoTareas.removeChild(listadoTareas.firstChild);
        }
    }
}
    

const ui = new UI();

export default ui;