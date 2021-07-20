import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

import BackButton from '../back';
import Pepsi from "../pepsi";
import Coke from "../coke";

const Booking = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(false);
    const [complete, setComplete] = useState(false);
    const [email, setEmail] = useState(false);
    const booking = localStorage.getItem('pending-booking');

    if(!booking) {
        return (
            <p>Something went wrong</p>
        );
    }
    const book = async () => {
        setLoading(true);

        await axios.post(`${process.env.REACT_APP_API_URL}/bookings`, {
            ...JSON.parse(booking),
            name,
            email
        })
        .then(r => r.data)
        .then(() => setComplete(true));

        setLoading(false);
    }

    const avail = JSON.parse(booking);

    return (
        <main className={'p-3 w-100'}>
            <BackButton />
            <aside className={'text-center'}>
                {(avail.brand === 'Pepsi') && (<Pepsi height={50} width={'50'} />)}
                {(avail.brand !== 'Pepsi') && (<Coke height={50} width={'50'} />)}

                <div className={'mt-3 mb-3'} style={{lineHeight: '1rem', flex: 1}}>
                    <p className={'p-0 m-0'}>{avail.room} - {avail.time}</p>
                </div>
            </aside>

            {!(complete) && (
                <Form style={{margin: '0 auto', maxWidth: '500px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" />
                    </Form.Group>
                    <Button disabled={loading || !name || !email} variant="primary" type="button" onClick={book}>
                        {loading ? 'Loading…' : 'Book'}
                    </Button>
                </Form>
            )}

            {!!(complete) && (
                <div className={'text-center p-3'} style={{margin: '0 auto', maxWidth: '500px', background: '#fff', border: '1px solid rgba(0,0,0,.2)', borderRadius: '.3rem'}}>
                    <strong>Complete</strong>
                    <p>Room {avail.room} is now booked at {avail.time}</p>
                    <p>You can cancel your booking at any time from the home screen</p>

                    <Link to={'/'}>
                        <Button variant="primary" type="button">
                            Complete
                        </Button>
                    </Link>
                </div>
            )}
        </main>
    );

}

export default Booking;