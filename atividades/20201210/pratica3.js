const lista1 = [2,7,9,5,3,4,1,0,4,3];
const lista2 = [3,2,3,3,3,2,5,8,3,6];
var lista3 = [];
var count = 0;
for(x=0; x<lista1.length; x++) {
    if(count%2 == 0){
        lista3.push(lista1[count]);
    } else {
        lista3.push(lista2[count]);
    }
    count++;
}

console.log(lista3);