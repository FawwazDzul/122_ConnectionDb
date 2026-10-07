import express from 'express';
import pg from 'pg';
const app = express();
const port = 3000;
const { Pool } = pg;

app.use(express.json());
app.use(
    express.urlencoded({
     extended: true 
    })
)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: 'towinnadzul09122005',
  port: 5432,
})

app.get('/', (req, res) => {
    console.log("TEST DATA:");
    pool.query('SELECT * from biodata',)
        .then((testData) => {
            console.log(testData.rows);
            res.json(testData.rows);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})