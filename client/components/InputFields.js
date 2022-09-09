import { useId } from "react";
import { Form } from "react-bootstrap";

export const TextInput = (props) => {
    const id = useId();
    const { label, type = "text", placeholder, defaultValue, disabled, register, info, name, required, errors } = props;
    return (
        <Form.Group className="mb-3" controlId={id}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control type={type} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} {...register} />
            {(errors?.message) && <Form.Text className="text-danger">{errors?.message}</Form.Text>}
        </Form.Group>
    );
};