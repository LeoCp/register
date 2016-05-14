const express = require('express')
,bodyParser = require("body-parser")
,mongoose = require("mongoose")
,Pessoa = require('./models/pessoa')
,app = express();require("./models/config");

app.use('/static',  express.static(__dirname + '/node_modules'));
app.use('/js',  express.static(__dirname + '/public/js'));
app.use('/view',  express.static(__dirname + '/public/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/addPessoa', (req,res) => {

  Pessoa.findOne({nome:req.body.nome}, (err,data) => {
    if (err) return console.error(err);
    if(data){
      console.log("Pessoa ja cadastrada!");
    }else{

      var pessoa = new Pessoa();
      pessoa.nome = req.body.nome;
      pessoa.cpf = req.body.cpf;
      pessoa.idade = req.body.idade;
      pessoa.save((err, pessoa) => {
        if (err) return console.error(err);
      });

    }
  });


});

app.get('/showPessoas',(req,res) => {

  Pessoa.find({}, (err,data) => {
    if (err){
      console.error(err);
    }else{
      res.json(data);
    }

  });

});

app.put('/pessoas/:id', (req,res) => {
  var id = req.params.id;
  var query = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    idade: req.body.idade
  };

  Pessoa.update(id, {$set:query},
    (err,doc) => {
      if (err){
        console.log(err);
      }
    }
  );

});

app.listen(3000, () => console.log("Rodando..."));
