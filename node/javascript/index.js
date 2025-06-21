const express = require('express');
const app = express();
const PORT = 8000;

// RESTFUL API - REST
// JSON - Linguagem universal para gerenciamento de dados
/**
 * GET - Coletar informações
 * POST - Criar informações
 * PUT - Atualizar informações
 * DELETE - Remover informações
 *
 * Status Code
 * 200 - OK
 * 400 - Bad Request
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status
 *
 * HEADERS
 * Content-Type = Conteúdo da requisição
 * Accept = Como aceito a resposta
 *
 */
app.get('/user', (req, res) => {
  res.json({
    msg: 'Trazer todos os usuários da minha base',
  });
});

app.post('/user', (req, res) => {
  res.json({
    msg: 'Criar um usuário na minha base',
  });
});

app.put('/user', (req, res) => {
  res.json({
    msg: 'Atualizar um usuário na minha base',
  });
});

app.delete('/user', (req, res) => {
  res.json({
    msg: 'Remover um usuário na minha base',
  });
});

// http://localhost:8000
// HTTP:// - Procotolo
// LOCALHOST (ou 127.0.0.1) - Dominio
// :8000 - Porta
// /user - Rota
app.listen(PORT, () => {
  console.log(`Server ON - port: ${PORT}`);
});
