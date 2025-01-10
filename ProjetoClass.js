
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){
        let ataque = "";  
        if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = 'tipo invalido';
            console.log(ataque)
        } 

        if (ataque !== 'tipo invalido') {
            console.log(`o ${this.tipo} ${this.nome}, de ${this.idade} anos, atacou usando: ${ataque}`)
        }
        
    }
    
}

let heroiPropriedades = new Heroi("shifu", 140, "ninja");
heroiPropriedades.atacar();