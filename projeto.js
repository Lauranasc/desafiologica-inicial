let nomeDoHeroi = "Zé";
let xp = 2100;
let mensagem = " "

if (xp <= 1000) {
   mensagem = "O Heroi de nome "+ nomeDoHeroi + " esta no nivel de Ferro"
    
} else if(xp >= 1001 && xp <= 2000){
    mensagem = "O Heroi de nome "+ nomeDoHeroi + " esta no nivel de Bronze"

} else if(xp >= 2001 && xp <= 5000 ){
    mensagem = "O Heroi de nome "+ nomeDoHeroi + " esta no nivel de Prata"

} else if(xp >= 5001 && xp <= 7000){
    mensagem = "O Heroi de nome "+ nomeDoHeroi + " esta no nivel de Ouro"

} else if(xp >= 7001 && xp <= 8000){
    mensagem = "O Heroi de nome " + nomeDoHeroi + " esta no nivel de Platina "

} else if (xp >= 8001 && xp <= 9000){
    mensagem = "O Heroi de nome "+ nomeDoHeroi + " esta no nivel Ascendente"

} else if (xp >= 9001 && xp <= 10000){
    mensagem = "O Heroi de nome "+ nomeDoHeroi + " esta no nivel Imortal"

} else {
    mensagem = "O Heroi de nome "+ nomeDoHeroi + "esta no nivel Radiante"
}

console.log(mensagem);

