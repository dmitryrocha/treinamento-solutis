const lista1 = [2,7,9,5,3,4,1,0,4,3];
const lista2 = [3,2,3,3,3,2,5,8,3,6];
var lista3 = [];
var aux = 0;
for(x=0; x<lista1.length; x++) {
    aux = lista1[x]*lista2[x];
    lista3.push(aux);
}

console.log(lista3);