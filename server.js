const express = require('express')
,bodyParser = require("body-parser")
,mongoose = require("mongoose")
,Pessoa = require('./models/pessoa')
,dbURI = 'mongodb://localhost/dbPessoas'
,app = express();

app.use('/static',  express.static(__dirname + '/node_modules'));
app.use('/js',  express.static(__dirname + '/public/js'));
app.use('/view',  express.static(__dirname + '/public/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/addPessoa', (req,res) => {

  mongoose.connect(dbURI);
  var pessoa = new Pessoa();
  pessoa.nome = req.body.nome;
  pessoa.cpf = req.body.cpf;
  pessoa.idade = req.body.idade;
  pessoa.save((err, pessoa) => {
    if (err) return console.error(err);
  });
  
  mongoose.connection.close( () => {
    console.log('Mongoose desconectado!');
  });

});

app.get('/showPessoas',(req,res) => {
  
  mongoose.connect(dbURI);
  
  Pessoa.find({}, (err,data) => {
    if (err){
      console.error(err);
    }else{
      res.json(data);
    }
    mongoose.connection.close( () => {
      console.log('Mongoose desconectado!');
    });
  });

});

app.listen(3000, () => console.log("Rodando..."));
