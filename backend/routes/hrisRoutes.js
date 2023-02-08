const express = require ('express')
const router = express.Router()
const { getHris} = require('../controller/hrisController')

//routes get data
router.get('/', getHris)

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get Data'})
// })

//routes post data
router.post('/', (req, res) => {
    res.status(200).json({message: 'Create Data'})
})

//routes update data
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update Data ${req.params.id}` })
})

//routes delete data
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete Data ${req.params.id}` })
})

module.exports = router