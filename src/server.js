const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8445;

app.listen(PORT, () => {
  console.log(`Servidor HTTPS en ejecución en el puerto ${PORT}`);
});