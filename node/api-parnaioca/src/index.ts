import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose'
import userController from './module/user/user.controller'
const app = express();
const PORT = 8000;
app.use(express.json());

app.use(userController)

app.listen(PORT, () => {
  console.log(`API Parnaioca ON - port: ${PORT}`);
  // protocolo: mongodb://
  // dominio: localhost
  // porta: 27017
  // banco: parnaiocadb
  // authSource: admin
  // username: root
  // password: example
  // 'mongodb://root:example@localhost:27017/parnaiocadb?authSource=admin'

  // process.env = acessa o par de chaves e valores que estarão no arquivo .env do projeto
  mongoose.connect(process.env.DB_STRING || '')
    .then(() => console.log('MongoDB connected - port: 27017'))
    .catch(error => console.error(error.message))
});
