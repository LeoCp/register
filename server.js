const express = require('express')
,app = express();

app.use(express.static(__dirname + '/public'));

app.post('/addPessoa', (req,res) => {

});

app.listen(3000, () => console.log("Rodando..."));
