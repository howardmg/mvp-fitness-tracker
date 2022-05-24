require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')

const app = express()
app.use(express.json())
app.use(express.static('Public'))

const poolConfig = {
    connectionString: process.env.DATABASE_URL
}
if (process.env.NODE_ENV === "production"){
    poolConfig.ssl = {rejectUnauthorized: false}
}
const pool = new Pool (poolConfig)

const PORT = process.env.PORT || 3000

app.get('/test', async (req, res) => {
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