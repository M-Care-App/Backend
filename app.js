require('dotenv').config();

const express = require('express');
const dbConfig = require('./config/dbConfig');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;
const authRoute = require('./app/routes/auth.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(dbConfig.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch(() => {
    console.log('failed to connect');
    process.exit();
  });

app.get('/', (_, res) => {
  res.send({ message: 'Welcome to M-Care Application' });
});

authRoute(app);

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
