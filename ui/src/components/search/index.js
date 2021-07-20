import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

import Error from '../error';
import Logo from '../logo';
import ResultsList from '../list';
import Select from '../select';
import axios from "axios";
import {useState} from "react";

const Search = ({
    brand,
    setBrand,
    times,
    showResults,
    setShowResults,
    setLoading,
    time,
    setTime,
    loading,
    error,
    setError
}) => {
    const [availability, setAvailability] = useState([]);

    const findAvailableRooms = async () => {
        setLoading(true);

        if((!brand || !time) && brand !== 'Coke or Pepsi') {
            setError('Please select a brand and time.');
            setLoading(false);
        } else {
            setError('');

            await axios.get(`${process.env.REACT_APP_API_URL}/availability/${brand}/${time}`)
                .then(r => r.data)
                .then(setAvailability);

            setLoading(false);
            setShowResults(true)
        }
    }

    return (
        <>
            <SearchBox>
                <Logo />

                <Select
                    label={'Coke or Pepsi'}
                    labelKey={'value'}
                    optionLabel={'label'}
                    options={[
                        {label: 'Coke', value: 'coca-cola'},
                        {label: 'Pepsi', value: 'pepsi'}
                    ]}
                    onChange={(evt) => {
                        setBrand(evt.target.value);
                    }}
                />

                <Select
                    label={'Time'}
                    labelKey={'time'}
                    optionLabel={'time'}
                    options={times}
                    onChange={(evt) => {
                        setTime(evt.target.value);
                    }}
                    disabled={brand === '' || brand === 'Coke or Pepsi'}
                />

                <Button disabled={loading || brand === '' || brand === 'Coke or Pepsi' || time === 'Time' || time === ''} onClick={findAvailableRooms}>{loading ? 'Loading…' : 'Find a room'}</Button>
                <CancelLink to={'/cancel'}>cancel a booking</CancelLink>
            </SearchBox>

            {showResults && availability && (
                <ResultsList setShowResults={setShowResults} availability={availability}/>
            )}

            <Error error={error} onClose={() => setError(false)} />
        </>
    );
}

export default Search;

const SearchBox = styled.section`
    display: flex;      
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
`;

const CancelLink = styled(Link)`
    font-size: 0.8rem;
    margin-top: 1rem;
    text-decoration: underline;
    color: ${props => props.theme.white}
`;

