const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Estou rodando na porta 8080");
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use("/users", userRoutes);