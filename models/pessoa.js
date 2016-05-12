var mongoose = require('mongoose')
,Schema = mongoose.Schema
,Pessoa = new Schema({
    nome: String,
    cpf: Number,
    idade: Number
});

module.exports = mongoose.model('pessoa', Pessoa);
