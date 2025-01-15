require('dotenv').config(); // carrega variaveis de ambiente do arquivo .env
const express = require('express');
const path = require('path');
const app = express();
//const port = 5000;

const port = process.env.PORT;
if (!port){
    throw new Error('A variável de ambiente PORT não está configurada. Verifique o arquivo .env.');
}

// Middleware para servir arquivos estáticos (como uma interface simples em HTML)
app.use(express.static('public'));

// Rota para pagina inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rota para a pagina "Iniciar"
app.get('/iniciar', (req, res) => {
    res.sendFile(__dirname + '/public/iniciar.html');
});

// Rota para a pagina "Saiba Mais"
app.get('/saiba-mais', (req, res) => {
    res.sendFile(__dirname + '/public/saiba-mais.html');
});

// Rota para a pagina "Tarot"
app.get('/tarot', (req, res) => {
    res.sendFile(__dirname + '/public/tarot.html');
});

// Rota para a pagina "Mapa Astral"
app.get('/mapa-astral', (req, res) => {
    res.sendFile(__dirname + '/public/mapa-astral.html');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
