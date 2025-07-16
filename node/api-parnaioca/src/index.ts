import express from 'express';
import userController from './module/user/user.controller'
const app = express();
const PORT = 8000;
app.use(express.json());

app.use(userController)

app.listen(PORT, () => {
  console.log(`API Parnaioca ON - port: ${PORT}`);
});
