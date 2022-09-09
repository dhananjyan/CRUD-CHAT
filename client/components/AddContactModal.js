import React from 'react';
import Modals from './Modals';
import { useForm } from "react-hook-form";
import ContactFormFields from './ContactFormFields';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setAddContactModal } from '../store/reducers/pageSlice';
import { createContact } from '../store/actions/contact';

export default function AddContactModal() {
    const dispatch = useDispatch();
    const { addContactModal } = useSelector(state => ({
        addContactModal: state.page.contact?.addContactModal
    }));
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHide = () => dispatch(setAddContactModal(false));
    const onSubmit = async data => {
        dispatch(createContact(data));
        onHide();
    }

    return (
        <Modals
            show={addContactModal}
            title="Add contact"
            onHide={onHide}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <ContactFormFields register={register} errors={errors} />
                <Button type="submit" variant="outline-primary w-100 mt-4" >Create</Button>
            </form>
        </Modals>
    )
}