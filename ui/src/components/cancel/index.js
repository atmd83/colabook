import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import BackButton from '../back';

const Cancel = () => {
    const [email, setEmail] = useState('');
    const [looked, setLooked] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    const cancelBooking = async (booking) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/bookings/${booking.id}`)
            .then(r => r.data);
        findBookings();
    }

    const findBookings = async () => {
        setLoading(true);
        await axios.get(`${process.env.REACT_APP_API_URL}/bookings/${email}`)
            .then(r => r.data)
            .then(setBookings);
        setLooked(true);
        setLoading(false);
    }

    return (
        <div className={'p-3'}>
            <BackButton />
            <Form className={'mb-5'} style={{margin: '0 auto', maxWidth: '500px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" />
                </Form.Group>
                <Button disabled={loading || !email} variant="primary" type="button" onClick={findBookings}>
                    {loading ? 'Loading…' : 'Find bookings'}
                </Button>
            </Form>

            {bookings.map(booking => {
                return (
                    <div key={booking.room}>
                    <aside style={{display: 'flex', justifyContent: 'space-between'}}>
                        <img width={'50'} src={`/images/${booking.brand}.png`} alt={''} />
                        <div className={'pl-3 pt-2'} style={{lineHeight: '1rem', flex: 1}}>
                            <p className={'p-0 m-0'}>{booking.room} - booked</p>
                            <p className={'p-0 m-0'}>{booking.time}</p>
                        </div>
                        <Button onClick={() => cancelBooking(booking)}>Cancel booking</Button>
                    </aside>
                    <hr />
                    </div>
                );
             })}

            {!!(bookings.length === 0) && looked && (
                <p className={'pt-3 pb-3'}>Sorry, we can't find any bookings with that email address.</p>
            )}

        </div>
    );
}

export default Cancel;
