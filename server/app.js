const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const pool = require('./pool')
const port = 4000;

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', routes);

app.listen(port, () => {
  console.log(`Serwer jest uruchomiony na http://localhost:${port}`);
});
