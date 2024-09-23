const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes); // Prefixo para rotas de usuário

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
