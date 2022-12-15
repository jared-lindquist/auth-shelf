const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "item";';

  pool.query(queryText).then((results) => {
    // console.log('query GET results from DB:', results)
    res.send(results.rows);
  }).catch((err) => {
    console.log('error getting from DB', err);
    res.sendStatus(500);
  })
});



/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  console.log('req.user: ', req.user);
  const queryText = `
  INSERT INTO "item" ("description", "image_url", "user_id")
  VALUES ($1, $2, $3);
  `;


  pool.query(queryText, [req.body.itemName, req.body.itemUrl, req.user.id])
    .then(() => {
      res.sendStatus(201);
    }).catch((err) => {
      console.log('error POSTing, ', err);
      res.sendStatus(500);
    });


});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

    console.log('in router delete');
    pool.query(`DELETE FROM "item" WHERE "id" = $1 AND "user_id" = $2`, [req.params.id, req.user.id])
      .then((results) => res.sendStatus(200))
      .catch((error) => res.sendStatus(500));
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
