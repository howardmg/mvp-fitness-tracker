const express = require('express')
const { Pool } = require('pg')

const app = express()
app.use(express.json())
app.use(express.static('Public'))

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      } 
    // user: 'atlantis',
    // host: 'localhost',
    // database: 'fitness_tracker',
    // port: 5432
})

const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM workout');
        res.json(data.rows)
    } catch (error) {
        res.send(error.message)
    }
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${PORT}`)
})