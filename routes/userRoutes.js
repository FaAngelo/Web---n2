const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

// Rota para cadastro de usuário
router.post('/cadastro', registerUser);

// Rota para login
router.post('/login', loginUser);

// Rota para cadastro de placa (protegida)
router.post('/cadastroPlaca', authenticateToken, (req, res) => {
    // Implementar lógica para cadastro de placa
    res.send('Placa cadastrada com sucesso!');
});

// Rota para relatório por cidade (protegida)
router.get('/relatorio/cidade/:cidade', authenticateToken, (req, res) => {
    // Implementar lógica para relatório
    res.send(`Relatório da cidade: ${req.params.cidade}`);
});

// Rota para consulta de placa (protegida)
router.get('/consulta/:placa', authenticateToken, (req, res) => {
    // Implementar lógica para consulta
    res.send(`Consulta da placa: ${req.params.placa}`);
});

// Rota para enviar vídeo tutorial
router.post('/videoTutorial', (req, res) => {
    const videoPath = 'caminho/para/o/video.mp4';
    res.sendFile(videoPath);
});

module.exports = router;
