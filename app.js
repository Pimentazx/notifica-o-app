const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notifications');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/notifications', notificationRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
