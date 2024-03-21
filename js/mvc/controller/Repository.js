export class Repository{

  constructor(){
    this._objLocal = ''
    this._objJSON  = ''
  }

  upObj(personList){
    // Recebe a lista de pessoas
    this._objLocal = personList
    // Transforma em JSON
    this._objJSON = JSON.stringify(this._objLocal)
    // Se existir um repositório
    if(localStorage.getItem('_repository')){
      // Remove o repositório anterior
      localStorage.removeItem('_repository')
      // Insere o repositório atualizado
      localStorage.setItem('_repository', this._objJSON)
    // Se não existir
    } else {
      // Apenas insere um repositório atualizado
      localStorage.setItem('_repository', this._objJSON)
    }
  }

  downObj(){
    // Pega o arquivo JSON
    this._objJSON  = localStorage.getItem('_repository')
    // Transforma em objeto literal
    this._objLocal = JSON.parse(this._objJSON)
  }

  // Cria uma cópia do objeto literal
  get objLocal(){
    return [].concat(this._objLocal)
  }

}