fetch = require("node-fetch");
let cepBuscado;
console.log("Buscando CEP");
cepBuscado = buscarCEP("41815270");
console.log("CEP Buscado");
console.log("CEP encontrado: ", cepBuscado);

function buscarCEP(parametro) {
    let cep;
    fetch('https://viacep.com.br/ws/${parametro}/json/')
    .then(response => response.json())
    .then(data => {cep = data.cep
    console.log("CEP encontrado: ", cep)})
    .catch(console.error);
    return cep
}