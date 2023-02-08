const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//routes using app.get
// app.get('/api/hris', (req, res) => {
//     res.status(200).json({message: 'Get Data'})
// })

//router
app.use('/api/hris', require('./routes/hrisRoutes.js'))

app.listen(port, () => console.log(`Server started on port ${port}`))