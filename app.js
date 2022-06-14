import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(res.statusCode + ' ' + req.method + ' ' + req.url );
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found!');
  console.log(res.statusCode + ' ' + req.method + ' ' + req.url );
})

app.listen(port, () => {
  console.log('App listening on port 3000!');
});