import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! We are good to go with Docker and CI/CD');
});

app.listen(PORT, () => {
  console.log('Server is running on port is 3000');
});
