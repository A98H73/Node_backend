const express = require('express')
const router= express.Router()
const Worker = require('../models/Worker')


router.get('/', async(req,res) => {
    try{
        const work= await Worker.find()
        res.json(work)

    }catch(err){
        res.send('Error' + err)
    }

})

router.post('/', async(req, res) => {
    const Worker =new Worker({
        Emp_Name: req.body.Emp_Name,
        Emp_id: req.body.Emp_id,
        Dept: req.body.Dept,
        Branch_name: req.body.Branch_name,
    })

    try{
        const a1= await Worker.save()
        res.json(a1)
    }catch(err){
        res.send("Error: ")

    }
})

module.exports = router
