import Form from 'react-bootstrap/Form';

export default ({
    labelKey,
    label,
    optionLabel,
    options,
    onChange,
    disabled=false
}) => {
    return (

        <Form.Control disabled={disabled} onChange={onChange} className={'mb-3 mt-3'} as={'select'} aria-label="Default select example">
            <option>{label}</option>
            {options.map(option => (<option key={option[labelKey]} value={option[labelKey]}>{option[optionLabel]}</option>))}
        </Form.Control>
    );
}