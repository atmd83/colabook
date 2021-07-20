import Search from '../components/search';
import {useEffect, useState} from "react";
import axios from "axios";

export default () => {
    const [brand, setBrand] = useState('');
    const [times, setTimes] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [time, setTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if(brand && brand !== 'Coke or Pepsi') {
            axios.get(`${process.env.REACT_APP_API_URL}/availability/${brand}`)
                .then(r => r.data)
                .then(setTimes)
                .catch(e => setError('Sorry, something went wrong. Please try again'));
        }
    }, [brand])

    return (
        <main className={'w-100'}>
            <Search
                brand={brand}
                setBrand={setBrand}
                times={times}
                showResults={showResults}
                setShowResults={setShowResults}
                setLoading={setLoading}
                time={time}
                setTime={setTime}
                loading={loading}
                error={error}
                setError={setError}
            />
        </main>
    );
}