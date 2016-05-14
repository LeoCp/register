const express = require('express')
,bodyParser = require("body-parser")
,mongoose = require("mongoose")
,pessoaModel = require('./models/pessoa')
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

  pessoaModel.findOne({nome:req.body.nome}, (err,data) => {
    if (err) return console.error(err);

    if(data){
      console.log("Pessoa ja cadastrada!");
    }else{

      const dataModel = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade
      },pessoa = new pessoaModel(dataModel);

      pessoa.save((err, pessoa) => {
        if (err) return console.error('ERRPO:',err);
      });

    }
  });


});

app.get('/showPessoas',(req,res) => {

  pessoaModel.find({}, (err,data) => {
    if (err){
      console.error(err);
    }else{
      res.json(data);
    }

  });

});

app.put('/alterarPessoa/:id', (req,res) => {
  const query = {_id:req.params.id}
  ,mod = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    idade: req.body.idade
  };

  pessoaModel.update(query, mod, function (err,doc) {
      if (err) console.log(err);
  });

});

app.delete('/removePessoa/:id',(req,res) => {
  const query = {_id:req.params.id};
  console.log(query);

  pessoaModel.remove(query,function (err,doc) {
    if (err) console.log(err);
  });

});



app.listen(3000, () => console.log("Rodando..."));
