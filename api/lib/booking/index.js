const router = require('express').Router();
const { makeBooking, findBooking, cancelBooking } = require('./handler');

router.post('/', async (req, res) => {
  const results = await makeBooking(req.body);
  return res.json(results);
});

router.delete('/:id', async (req, res) => {
  const results = await cancelBooking(req.params.id);
  return res.json(results);
});

router.get('/:email', async (req, res) => {
  const results = await findBooking(req.params.email);
  return res.json(results);
});

module.exports = router;
