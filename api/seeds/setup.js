const roomNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const times = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const cokeRooms = [...roomNumbers]
    .map((room, index) => ({id: (index + 1), name: `C${room}`, brand: 'coca-cola'}))

const pepsiRooms = [...roomNumbers]
    .map((room, index) => ({id: (index + 11), name: `P${room}`, brand: 'pepsi'}))

const cokeTime = cokeRooms.map((room, rIndex) =>
  times.map((time, index) => ({room: room.name, time: time, name: '', email: '', available: true, brand: room.brand} )));

const pepsiTime = pepsiRooms.map((room, rIndex) =>
    times.map((time, index) => ({room: room.name, time, name: '', email: '', available: true, brand: room.brand})));

exports.seed = function(knex) {
  return knex('rooms').del()
    .then(function () {
      return knex('rooms').insert([...cokeRooms, ...pepsiRooms]);
    }).then(function () {
        return knex('bookings').insert([...cokeTime.flat(), ...pepsiTime.flat()]);
      });
};
