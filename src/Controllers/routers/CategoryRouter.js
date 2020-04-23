const express = require('express');
const router = new express.Router();
const Category = require('../modals/Category')

router.post('/category', async (req,res) => {
    const newCat = new Category(req.body);
    try{
        newCat.save();
        res.status(201).send(newCat);
    }
    catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;