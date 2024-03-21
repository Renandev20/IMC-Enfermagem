import { toClearElement, toClearTable } from "../../main.js"

export class Message{

  constructor(){
    this.flashLocal = document.querySelector('.msg')
    this.body       = document.querySelector('body')
    this.fullLocal  = document.querySelector('.full-modal')
    this.modalLocal = document.querySelector('.modal')
    this.yes        = document.querySelector('.y')
    this.no         = document.querySelector('.n')
    this.ask        = document.querySelector('.ask')
    this.txt        = document.querySelector('.text')

  }
  // Gera a visualização de mensagens rápidas
  flashMsg(msg, type){
    this.flashLocal.classList.add(type)
    this.flashLocal.classList.remove('disable')
    this.flashLocal.innerHTML = msg
    setTimeout(()=>{
      this.flashLocal.classList.add('disable')
      this.flashLocal.classList.remove(type)
      this.flashLocal.innerHTML = ''
    }, 1250)
  }

  // Cria e mostra a janela modal de acordo com o pedido de PersonView
  modal(nome, id){
    // Cria os elementos da janela modal
    let section1  = document.createElement('section')
    let section2  = document.createElement('section')
    let ask       = document.createElement('div')
    let text      = document.createElement('div')
    let buttons   = document.createElement('div')
    let yes       = document.createElement('button')
    let no        = document.createElement('button')
    // Atribui textos com informações passadas pela PersonView
    ask.innerHTML = `Remover ${nome}?`
    text.innerHTML= `Remover irá excluir os dados de ${nome} permanentemente.`
    yes.innerHTML = 'Sim'
    no .innerHTML = 'Não'
    // Adiciona evento de escuta nos botões
    yes.addEventListener('click', ()=>{
      if(nome == 'TODA tabela'){
        toClearTable()
      } else {
        toClearElement(id)
      }
      this.removeModal(section1, section2)
    })
    no.addEventListener('click', ()=>{
      this.removeModal(section1, section2)
    })
    // Configura os atributos para a estilização
    section1 .setAttribute('class', 'full-modal')
    section2 .setAttribute('class', 'modal')
    ask      .setAttribute('class', 'ask')
    text     .setAttribute('class', 'text')
    buttons  .setAttribute('class', 'buttons')
    yes      .setAttribute('class', 'yes')
    no       .setAttribute('class', 'no')
    // Gera a visualização no documento
    this.body.appendChild(section1)
    this.body.appendChild(section2)
    section2 .appendChild(ask)
    section2 .appendChild(text)
    section2 .appendChild(buttons)
    buttons  .appendChild(yes)
    buttons  .appendChild(no)
  }

  // Nome bem sugestivo, remove o modal criado
  removeModal(iten1, iten2){
    iten1.remove()
    iten2.remove()
  }
}