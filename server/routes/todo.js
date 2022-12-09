var express = require('express');
var TodoTask = require('../models/TodoTask');
var router = express.Router();


router.get('/read/', async (req, res, next) => {
    const all = await TodoTask.find({});
    res.json(all);
});

router.post('/create/', async (req, res, next) => {
    const todoTask = new TodoTask({
        content: req.body.content,
        completed: false
    });

    try{
        await todoTask.save();
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.post('/update/', function(req, res) {
    const id = req.query.id;
    TodoTask.findByIdAndUpdate(id,{content: req.body.content, completed: req.body.completed}, (err) => {
        if (err) return res.sendStatus(500,err);
        res.sendStatus(200);
    });
});

router.post('/delete/', function(req, res, next) {
    const id = req.query.id; 
    TodoTask.findByIdAndRemove(id, (err) => {
        if(err) return res.sendStatus(500,err);
        res.sendStatus(200);
    })
});


module.exports = router;