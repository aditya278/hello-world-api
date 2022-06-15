import express from 'express';
import quote from 'find-quote';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(res.statusCode + ' ' + req.method + ' ' + req.url );
});

app.get('/quote/:param', (req, res) => {
  const param = req.params.param;
  const myQuote = quote.getQuoteWithMovieName(param);
  res.send(myQuote);
  console.log(res.statusCode + ' ' + req.method + ' ' + req.url );
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found!');
  console.log(res.statusCode + ' ' + req.method + ' ' + req.url );
})

app.listen(port, () => {
  console.log('App listening on port 8080!');
});