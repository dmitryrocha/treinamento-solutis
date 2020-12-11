const lista = [12,33,2,55,43,18,17,20,98,23];
let intervalo = 0
let foraDoIntervalo = 0
for(x = 0; x < 10; x++) {
    if(lista[x]>=10 && lista[x] <=20){
        intervalo++;
    } else {
        foraDoIntervalo++;
    }
}

console.log("São "+intervalo+" entre 10 e 20. São "+foraDoIntervalo+ "fora do intervalo");