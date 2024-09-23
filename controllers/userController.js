const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'seu_segredo_aqui'; // Mantenha essa chave em segredo!

let users = []; // Simulando um banco de dados com um array

const registerUser = async (req, res) => {
    const { email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    users.push({ email, senha: hashedPassword });
    res.status(201).send('Usuário cadastrado com sucesso!');
};

const loginUser = async (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).send('Dados incorretos');

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) return res.status(400).send('Dados incorretos');

    const token = jwt.sign({ email: user.email }, SECRET_KEY);
    res.json({ token });
};

module.exports = { registerUser, loginUser };
