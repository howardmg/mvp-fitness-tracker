const express = require('express')
const { send } = require('express/lib/response')
const { Pool } = require('pg')

const app = express()
app.use(express.json())
app.use(express.static('Public'))

const pool = new Pool ({
    connectionString: 'postgres://vfkhwmcrfyxepa:07c30010f13894bf487169c546eed6c6c5db03879ff685af18cd41c364854575@ec2-3-228-235-79.compute-1.amazonaws.com:5432/d4csa15j8p8msb',
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