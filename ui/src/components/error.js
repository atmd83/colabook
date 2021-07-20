import styled from "styled-components";
import Alert from "react-bootstrap/Alert";

export default ({onClose, error}) => {
    if(error) {
        return (
            <AlertToast variant="danger" onClose={onClose} dismissible>
                <p>{error}</p>
            </AlertToast>
        );
    }
    return null;
}

const AlertToast = styled(Alert)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    padding-bottom: 0;
`;