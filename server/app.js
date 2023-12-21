const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Witaj w serwerze Node.js!');
});

app.listen(port, () => {
  console.log(`Serwer jest uruchomiony na http://localhost:${port}`);
});
