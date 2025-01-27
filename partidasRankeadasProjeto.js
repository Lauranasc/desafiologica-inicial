let saldoDeRankeadas = calculoDoSaldo(100, 5);
let mensagem = " ";

function calculoDoSaldo(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return resultado
}

if (saldoDeRankeadas < 10){
     mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível de Ferro"

} else if (11 <= saldoDeRankeadas &&  saldoDeRankeadas <= 20){
    mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível de Bronze"

} else if ( 21 <= saldoDeRankeadas && saldoDeRankeadas <= 50){
     mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível de Prata"

} else if ( 51 <= saldoDeRankeadas && saldoDeRankeadas <= 80){
     mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível de Ouro"

} else if ( 81 <= saldoDeRankeadas && saldoDeRankeadas <= 90){
     mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível de Diamante"

} else if ( 91 <= saldoDeRankeadas && saldoDeRankeadas <= 100){
     mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível Lendário"

} else {
     mensagem = "O Herói de saldo de " + saldoDeRankeadas + " está no nível Imortal"
}
console.log(mensagem)
