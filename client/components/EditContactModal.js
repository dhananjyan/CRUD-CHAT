import React from 'react';
import Modals from './Modals';
import { useForm } from "react-hook-form";
import ContactFormFields from './ContactFormFields';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setEditContactModal, setEditUserModal } from '../store/reducers/pageSlice';
import { updateContact } from '../store/actions/contact';

export default function EditContactModal() {
    const dispatch = useDispatch();
    const { editContactModal } = useSelector(state => ({
        editContactModal: state.page.contact?.editContactModal
    }));
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: editContactModal || {} });
    const onSubmit = async data => {
        dispatch(updateContact(data));
        onHide();
    }
    const onHide = () => dispatch(setEditContactModal(null));

    return (
        <Modals
            show={!!editContactModal}
            title="Edit User"
            onHide={onHide}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <ContactFormFields register={register} errors={errors} />
                <Button type="submit" variant="outline-primary w-100 mt-4" >Update</Button>
            </form>
        </Modals>
    )
}