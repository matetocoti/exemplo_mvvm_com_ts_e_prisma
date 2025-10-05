import express from 'express';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/', (req, res) => {
  res.send('Hello, World!');
});



const PORT: number = 3000 | parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
