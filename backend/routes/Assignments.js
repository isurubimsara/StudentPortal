const express = require('express');
const assignmentsRoutes = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let Assignment = require('../models/Assignments');

assignmentsRoutes.route('/add').post(function(req,res) {
    let assignment = new Assignment(req.body);
    assignment.save()
    .then( assignment => {
        res.status(200).json({'assignment': 'assignment added successfully'})
    })
    .catch((err) => {
        res.status(400).send("unable to save")
    })
})

assignmentsRoutes.route('/').get(function(req,res) {
    Assignment.find()
        .then((assignments) => {
            res.json(assignments);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error fetching assignments');
        });
});

// Updated delete route using promises
assignmentsRoutes.route('/delete/:id').get(function (req,res) {
    Assignment.findByIdAndRemove({_id: req.params.id})
        .then(() => {
            res.json("Successfully removed");
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to remove assignment");
        });
});

module.exports = assignmentsRoutes;