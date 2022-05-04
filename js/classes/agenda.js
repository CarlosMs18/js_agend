class Agenda{
    constructor(){
        this.lista = []
    }
    
    addAgenda(newContacto){
        this.lista = [...this.lista, newContacto]
        console.log(this.lista)
    }


}

const agenda = new Agenda()

export default agenda