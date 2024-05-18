import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/Database.js';
import route from './routes/Route.js';
import path from 'path';
import methodOverride from 'method-override';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', route);

// app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})