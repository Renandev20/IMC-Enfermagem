// Importa modelo de mensagens para trocar informações
import { Message }  from "./Message.js"

export class PersonView{
  
  constructor(){
    this.message= new Message()
    this._table = document.querySelector('table')
  }

  // Gera a visualização inicial da tabela (cabeçalho)
  initTable(){
    let tr         = document.createElement('tr')
    let nome       = document.createElement('th')
    let imc        = document.createElement('th')
    let clas       = document.createElement('th')
    nome.innerHTML = 'Nome'
    imc.innerHTML  = 'IMC'
    clas.innerHTML = 'Situação'
    nome.setAttribute('id', 'thName')
    imc .setAttribute('id', 'imc')
    clas.setAttribute('id', 'c')
    tr.appendChild(nome)
    tr.appendChild(imc)
    tr.appendChild(clas)
    this._table.appendChild(tr)
  }

  // Gera a visualização da tabela
  view(list){
    // Limpa o local no documento
    this._table.innerHTML = ''
    // Cria os elementos do novo cabeçalho
    let         tr = document.createElement('tr')
    let         id = document.createElement('th')
    let       nome = document.createElement('th')
    let        imc = document.createElement('th')
    let       clas = document.createElement('th')
    let        btn = document.createElement('th')
    id.innerHTML   = 'ID'
    nome.innerHTML = 'Nome'
    imc.innerHTML  = 'IMC'
    clas.innerHTML = 'Situação'
    btn.innerHTML  = 'x'
    // Adiciona escuta de evento para limpar tabela
    btn.addEventListener('click', evt=>{
      // Chama a caixa de dialogo de Message
      this.message.modal('TODA tabela')
    })
    // Cria os atributos
    nome.setAttribute('id', 'thName')
    imc .setAttribute('id', 'imc')
    clas.setAttribute('id', 'c')
    btn .setAttribute('class', 'btn clearAll')
    // Gera a visualização dos elementos criados
    tr.appendChild(id)
    tr.appendChild(nome)
    tr.appendChild(imc)
    tr.appendChild(clas)
    tr.appendChild(btn)
    this._table.appendChild(tr)

    // Gera a visualização de cada pessoa da lista de pessoas na tabela
    list.map((el, i)=>{
      // Cria os elementos de cada pessoa para a tabela
      let         tr = document.createElement('tr')
      let         id = document.createElement('td')
      let       nome = document.createElement('td')
      let        imc = document.createElement('td')
      let       clas = document.createElement('td')
      let        btn = document.createElement('td')
      // Insere as informações de cada pessoa nos elementos
      id.innerHTML   = i+1
      nome.innerHTML = el._name
      imc.innerHTML  = el._imc
      clas.innerHTML = el._Class
      btn.innerHTML  = 'x'
      // Adiciona escuta de evento para limpar pessoa da tabela
      btn.addEventListener('click', evt=>{
        let name = evt.target.parentNode.dataset.name
        let id = evt.target.parentNode.id
        // Chama caixa de dialogo passando o nome e o id de quem deve remover
        this.message.modal(name, id)
      })
      // Cria os atributos
      btn.setAttribute('class', 'btn clear')
      tr.setAttribute('data-name', el._name)
      tr.setAttribute('id', el.id )
      // Gera a visualização de cada linha criada
      tr.appendChild(id)
      tr.appendChild(nome)
      tr.appendChild(imc)
      tr.appendChild(clas)
      tr.appendChild(btn)
      this._table.appendChild(tr)
    })  
  }

}