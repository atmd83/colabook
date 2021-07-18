const router = require('express').Router();
const { getTimesByBrand, getRoomsByTime } = require('./handler');


router.get('/:brand', async (req, res) => {
  const { brand } = req.params;
  const times = await getTimesByBrand(brand);
  return res.json(times);
});


router.get('/:brand/:time', async (req, res) => {
  const { brand, time } = req.params;
  const rooms = await getRoomsByTime(brand, time);
  return res.json(rooms);
});





module.exports = router;
