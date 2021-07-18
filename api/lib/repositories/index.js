const bookshelf = require('../database-connection');

const Bookings = bookshelf.model('bookings', {
  tableName: 'bookings',
});

module.exports = {
  Bookings
};
