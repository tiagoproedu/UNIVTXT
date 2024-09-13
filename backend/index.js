const express = require('express');
const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Estou rodando na porta 8080");
})

app.get('/', (req, res) => {
    res.send('Pagina de login');
})