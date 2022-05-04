import {formularioDatos} from '../helpers/selectors.js'
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

    larcita(){
        console.log('aakaaka')
    }
}
    

const ui = new UI();

export default ui;