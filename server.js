const express = require('express')
,app = express();

//
app.use('/static',  express.static(__dirname + '/node_modules'));
app.use('/js',  express.static(__dirname + '/public/js'));
app.use('/view',  express.static(__dirname + '/public/views'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post('/addPessoa', (req,res) => {});
app.get('/showPessoas',(req,res)=>{});

app.listen(3000, () => console.log("Rodando..."));
