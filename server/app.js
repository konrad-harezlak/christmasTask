const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const pool = require('./pool')
const port = 3000;

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', routes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Serwer jest uruchomiony na http://localhost:${port}`);
});
