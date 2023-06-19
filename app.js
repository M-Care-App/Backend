// require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to M-Care Application' });
});

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
