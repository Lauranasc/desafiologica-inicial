let ataque;
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar(){
        if (this.tipo === "mago"){
            this.ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            this.ataque = "espada"
        } else if (this.tipo === "monge"){
            this.ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
          this.ataque = "shuriken"
        } else {
            this.ataque = " tipo invalido"
        }
        console.log(`o ${this.tipo} ${this.nome}, de ${this.idade} anos, atacou usando: ${this.ataque}`)
    }
    

}
let heroiPropriedades = new heroi("shifu", 140, "ninja");
heroiPropriedades.atacar()
