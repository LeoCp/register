const mongoose = require('mongoose')
,_schema = {
  nome: String,
  cpf: String,
  idade: Number
},pessoaSchema = new mongoose.Schema (_schema);
module.exports = mongoose.model('pessoa',pessoaSchema);
