const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

describe('Testes das rotas', () => {
    test('Deve cadastrar um novo usuário', async () => {
        const response = await request(app).post('/api/cadastro').send({
            email: 'teste@example.com',
            senha: 'senhaSegura123'
        });
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe('Usuário cadastrado com sucesso!');
    });

    test('Deve fazer login e retornar um token', async () => {
        await request(app).post('/api/cadastro').send({
            email: 'teste@example.com',
            senha: 'senhaSegura123'
        });

        const response = await request(app).post('/api/login').send({
            email: 'teste@example.com',
            senha: 'senhaSegura123'
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
    });
});
