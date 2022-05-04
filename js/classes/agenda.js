class Agenda{
    constructor(){
        this.lista = []
    }
    
    addAgenda(newContacto){
        this.lista = [...this.lista, newContacto]
       
      
    }
    eliminarContacto(idContact){
      
        this.lista = this.lista.filter(l => l.id != idContact)

    }

}

const agenda = new Agenda()

export default agenda