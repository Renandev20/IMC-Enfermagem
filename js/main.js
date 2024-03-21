import { PersonController } from "./mvc/controller/PersonController.js"

// Instanciar modelo de controlador
let personController = new PersonController()

// Iniciar visualização da tabela
personController.initView()

// Mostrar dados guardados
if(personController.repository == true){
  personController.show()
} else {
// Criar repositório para guardar dados
  personController.setRepository()
}

// Informações do DOM
const form = document.querySelector('form')
const table= document.querySelector('table')

form.addEventListener('submit', evt=>{
  // Enviar o evento ao controlador
  personController._add(evt)
  // Pedir para o controlador limpar o formulário
  personController._formClean()
})

// Pede para o controlador apagar linha da tabela
export function toClearElement(id){
  personController.clearElement(id)
}
// Pede para o controlador apagar toda tabela
export function toClearTable(){
  personController.clearTable()
  table.innerHTML = ''
  personController.initView()
}