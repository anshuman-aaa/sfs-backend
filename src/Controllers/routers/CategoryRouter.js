const express = require('express');
const router = new express.Router();
const Category = require('../modals/Category')

router.post('/category', async (req,res) => {
    const newCat = new Category(req.body);
    try{
        await newCat.save();
        res.status(201).send(newCat);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
router.get('/all/category', async (req,res) => {
    try{
        let allCategory =  Category.find({});
        res.status(201).send(allCategory);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
module.exports = router;