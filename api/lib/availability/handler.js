const { Rooms, Bookings } = require('../repositories');

module.exports = {
  getTimesByBrand: async (brand) => {
    // returns an array of available times for that brand
    // e.g. {label: '8am', value: '08:00:00'}
    const results = await new Bookings()
        .where({brand})
      .fetchAll({require: false})
      .then(r => r.toJSON());

    return results;
  },
  getRoomsByTime: async (brand, time) => {
    // returns an array of available times for that brand
    // e.g. {brand: 'Coca Cola', time: '8am', room: 'C01'}
    const results = await new Bookings()
        .where({brand, available: true, time})
        .fetchAll({require: false})
        .then(r => r.toJSON());

    return results;
  }
};
