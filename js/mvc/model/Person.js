export class Person{

  static id = 0
  constructor(name, age, weight, height){
    this.id      = Person.id + 1
    this._name   = name
    this._age    = age
    this._weight = weight
    this._height = height
    this._imc    = (this._weight / (this._height * this._height)).toFixed(2)
    this._Class  = this.classIMC()
    Person.id   += 1
    
  }

  get name(){
    return this._name
  }

  get imc(){
    return this._imc
  }

  classIMC (){
    let valorImc  = this._imc
    let Class     = ''
    if(valorImc < 18.5){
      Class       = 'Baixo peso'
    } else if(valorImc <= 24.9){
      Class       = 'Peso normal'
    } else if(valorImc <= 29.9){
      Class       = 'Sobrepeso'
    } else if(valorImc <= 34.9){
      Class       = 'Obesidade Grau I'
    } else if(valorImc <= 39.9){
      Class       = 'Obesidade Grau II'
    } else if(valorImc >= 40){
      Class       = 'Obesidade Mórbida'
    } else {
      Class       = 'Dados invalidos'
    }

    return Class
  }

  setId(){
    Person.id = 0
  }
}
