import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import Coke from './coke';
import Pepsi from './pepsi';

export default ({availability, setShowResults}) => {
    return (
        <Modal.Dialog centered>
            <Modal.Header onHide={() => setShowResults(false)} closeButton>
                <Modal.Title as={'p'}>Results</Modal.Title>
            </Modal.Header>

            <Content>
                {availability.map(avail => {
                    return (
                        <div key={`${avail.room}-${avail.time}`}>
                            <aside style={{display: 'flex', justifyContent: 'space-between'}}>
                                {(avail.brand === 'Pepsi') && (<Pepsi height={50} width={'50'} />)}
                                {(avail.brand !== 'Pepsi') && (<Coke height={50} width={'50'} />)}
                                {/*<img width={'50'} src={`/images/${avail.brand}.png`} alt={''} />*/}

                                <div className={'pl-3 pt-2'} style={{lineHeight: '1rem', flex: 1}}>
                                    <p className={'p-0 m-0'}>{avail.room} - available</p>
                                    <p className={'p-0 m-0'}>{avail.time}</p>
                                </div>
                                <Link to={'/booking'} onClick={() => {
                                    localStorage.setItem('pending-booking', JSON.stringify(avail));
                                }}>
                                    <Button>Book</Button>
                                </Link>
                            </aside>
                            <hr />
                        </div>
                    );
                })}
            </Content>
        </Modal.Dialog>
    );
}

const Content = styled(Modal.Body)`
    max-height: 500px;
    overflow: scroll;
`;