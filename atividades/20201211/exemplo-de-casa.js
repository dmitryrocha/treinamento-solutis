const { resolve } = require("path");

let promessa = new Promise((resolve, reject) => {
    let x = Math.floor(Math.random()*100);
    if(x%2==0){
        resolve("É par mesmo")
    } else {
        reject("Deu ruim. É par não")
    }
})


promessa.then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})