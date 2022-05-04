class Agenda{
    constructor(){
        this.lista = []
        this.guardarLocalStorage()
    }
    
    addAgenda(newContacto){
        this.lista = [...this.lista, newContacto]
        
      
    }
    eliminarContacto(idContact){
      
        this.lista = this.lista.filter(l => l.id != idContact)

    }

    guardarLocalStorage(){
        localStorage.setItem('agenda',JSON.stringify(this.lista))
    }

    leerLocalStorage(){
        this.lista = JSON.parse(localStorage.getItem('agenda')) || []
    }
}

const agenda = new Agenda()

export default agenda