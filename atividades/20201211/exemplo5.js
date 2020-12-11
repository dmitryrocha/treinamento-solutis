function fazRequisicao() {
    return new Promise((resolve, reject) => {
        setTimeout(()  => {
            resolve("Promisse enviada");
            //reject("Promisse erro");
            //throw new Error("Deu erro");
        }, 5000);
    });
}

fazRequisicao()
.then(console.log)
.catch(console.log)
//.catch(console.error)
.finally(console.log("Finalizando..."))