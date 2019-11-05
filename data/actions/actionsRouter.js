const knex = require('../dbConfig');
const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    knex
    ('cars')
    .then(cars => {
      res.json(cars)
    })
    .catch(err => {
      res.status(500).json({message: "could not list cars"})
    })
   })

router.post('/', (req, res) => {
    cdb = req.body
    knex('cars')
    .insert({vin: cdb.vin, make: cdb.make, model: cdb.model, mileage: cdb.mileage, title: cdb.title})
    .then(account => {
        res.status(201).json(account);
      })
      .catch(error => {
          console.log(error)
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
})
router.put('/:id', (req, res) => {
    // validate the data before calling the database
    cdb = req.body
    knex('cars')
      .where({ id: req.params.id })
      .update({vin: cdb.vin, make: cdb.make, model: cdb.model, mileage: cdb.mileage, title: cdb.title})
      .then(count => {
        // count: how many records/rows were updated
        res.status(200).json(count);
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to update post' });
      });
  });
  router.delete('/:id', (req, res) => {
    // validate the data before calling the database
  
    knex('cars')
      .where({ id: req.params.id })
      .del()
      .then(count => {
        // count: how many records/rows were delete
        res.status(200).json({ message: "Cars has been deleted"});
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to delete post' });
      });
  });
module.exports = router;