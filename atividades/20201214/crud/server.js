const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const objectID = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://usuario:senhaDB20@cluster0.7nqni.mongodb.net/crud?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, client) => {
    if(err) {
        return console.log(err)
    }
    db = client.db('crud')

    app.listen(3000, function() {
        console.log('Servidor rodando na porta 3000')
    })
})

app.use(bodyparser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('home')
});

app.get('/show', (req, res) => {
    db.collection('funcionario').find().toArray(
        (err, results) => {
            if(err) {
                return console.log(err)
            }
            res.render('show',{data: results})
        }
    )
})

app.post('/show', function(req, res) {
    db.collection('funcionario').save(req.body, (err, result) => {
        if(err) {
            return console.log(err)
        }
        console.log('Dados salvos no banco')
        res.redirect('/show')
    })
})

app.route('/edit/:id')
.get((req, res) => {
    var id = req.params.id
    db.collection('funcionario').find(objectID.ObjectID(id)).toArray(
        (err, result) => {
            if(err) {
                return console.log(err)
            }
            res.render('edit', {data: result}) 
        }
    )
})
.post((req, res) => {
    var id = req.params.id
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
    db.collection('funcionario').updateOne( 
        {
            _id: objectID.ObjectID(id)
        },
        {
            $set: {
                nome: nome,
                sobrenome: sobrenome
            }
        }, (err, result) => {
            if(err) {
                return console.log(err)
            }
            res.redirect('/show')
            console.log('Banco atualizado com sucesso!')
        }
    )
})

app.route('/delete/:id')
.get((req, res) => {
    var id = req.params.id
    db.collection('funcionario').deleteOne(
        {
            _id: objectID.ObjectId(id)
        },
            (err, result) => {
                if(err) {
                    return console.log(err)
                }
                res.redirect('/show')
                console.log('Registro removido com sucesso!')
            }
        
    )
})