const { Bookings } = require('../repositories');

module.exports = {
    makeBooking: async ({id, email, name}) => {
        // returns an array of available times for that brand
        // e.g. {label: '8am', value: '08:00:00'}
        const booking = await new Bookings({id}).fetch();

        booking.set('available', false);
        booking.set('name', name);
        booking.set('email', email);

        booking.save({}, {
            method: 'update'
        })

        return {status: 'booking confirmed'};
    },

    findBooking: async (email) => {
        const results = await new Bookings()
            .where({email})
            .fetchAll({require: false})
            .then(r => r.toJSON());
        return results;
    },

    cancelBooking: async (id) => {
        const booking = await new Bookings({id}).fetch();

        booking.set('available', true);
        booking.set('name', '');
        booking.set('email', '');

        booking.save({}, {
            method: 'update'
        })
        return { status: 'booking canceled'};
    }
};
