class Agenda{
    constructor(){
        this.lista = []
    }
    
    addAgenda(newContacto){
        this.lista = [...this.lista, newContacto]
      
    }


}

const agenda = new Agenda()

export default agenda