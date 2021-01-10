const express = require('express')
const router= express.Router()
const Worker = require('../models/worker')


router.get('/', async(req,res) => {
    try{
        const work= await Worker.find()
        res.json(work)

    }catch(err){
        res.send('Error' + err)
    }

})

//To find a perticular Employee
router.get('/:id', async(req,res) => {
    try{
        const work= await Worker.findById(req.params.id)
        res.json(work)

    }catch(err){
        res.send('Error' + err)
    }

})



router.post('/', async(req, res) => {
    const working =new Worker({
        Emp_Name: req.body.Emp_Name,
        Emp_id: req.body.Emp_id,
        Dept: req.body.Dept,
        Branch_name: req.body.Branch_name,
        sub: req.body.sub
    })

    try{
        const a1= await working.save()
        res.json(a1)
    }catch(err){
        res.send("Error: ")

    }
})

// to Change minute detaiols we will use a PATCH

router.patch('/:id', async(req,res) => {
    try{
        const work= await Worker.findById(req.params.id)
        work.Emp_Name=req.body.Emp_Name 
        const a1= await work.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async(req,res) => {
    try{
        const work= await Worker.remove(req.params.id)

        work.Emp_Name=req.body.Emp_Name 
        const a1= await work.save()
        res.json(a1)

    }catch(err){
        res.send('Error'+err)
    }

})

module.exports = router
