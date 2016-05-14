const mongoose = require('mongoose')
,_schema = {
  nome: String,
  cpf: Number,
  idade: Number
},pessoaSchema = new mongoose.Schema (_schema);
module.exports = mongoose.model('pessoa',pessoaSchema);
