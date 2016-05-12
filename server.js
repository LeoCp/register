const express = require('express')
,bodyParser = require("body-parser")
,mongoose = require("mongoose")
,Pessoa = require('./models/pessoa')
,app = express();


app.use('/static',  express.static(__dirname + '/node_modules'));
app.use('/js',  express.static(__dirname + '/public/js'));
app.use('/view',  express.static(__dirname + '/public/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/addPessoa', (req,res) => {
  mongoose.connect('mongodb://localhost/dbPessoas');
  var pessoa = new Pessoa();
  pessoa.nome = req.body.nome;
  pessoa.cpf = req.body.cpf;
  pessoa.idade = req.body.idade;
  pessoa.save(function (err, pessoa) {
    if (err) return console.error(err);
  });

  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected');
  });

});

app.get('/showPessoas',(req,res) => {
  mongoose.connect('mongodb://localhost/dbPessoas');
  Pessoa.find({},(err,data) => {

    if (err){
      console.error(err);
    }else{
      res.json(data);
    }
    mongoose.connection.close(function () {
      console.log('Mongoose desconectado');
    });

  });

});

app.listen(3000, () => console.log("Rodando..."));
