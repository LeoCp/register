const express = require('express')
,bodyParser = require("body-parser")
,mongoose = require("mongoose")
,pessoaModel = require('./models/pessoa')
,port = process.env.PORT || 5000
,app = express();require("./models/config");

app.use('/static',  express.static(__dirname + '/node_modules'));
app.use('/js',  express.static(__dirname + '/public/js'));
app.use('/view',  express.static(__dirname + '/public/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const callback = (err,doc) => {
  if (err) console.error('ERRPO: ' + err);
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/addPessoa', (req,res) => {
  pessoaModel.findOne({nome:req.body.nome}, (err,data) => {
    if (err) {
      return console.error(err);
    }else{
      if(data){
        console.log("Pessoa ja cadastrada!");
      }else{
        const dataModel = {
          nome: req.body.nome,
          cpf: req.body.cpf,
          idade: req.body.idade
        },pessoa = new pessoaModel(dataModel);
        pessoa.save(callback);
      }
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
  pessoaModel.update(query, mod, callback);
});

app.delete('/removePessoa/:id',(req,res) => {
  const query = {_id:req.params.id};
  pessoaModel.remove(query,callback);

});

app.listen(port,() => console.log( "Rodando.."));
