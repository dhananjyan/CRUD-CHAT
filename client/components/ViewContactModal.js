import React from 'react';
import Modals from './Modals';
import { useDispatch, useSelector } from 'react-redux';
import { setViewContactModal } from '../store/reducers/pageSlice';

export default function ViewContactModal() {
    const dispatch = useDispatch();
    const { contact } = useSelector(state => ({
        contact: state.page.contact?.viewContactModal
    }));
    const onHide = () => dispatch(setViewContactModal(null));


    return (
        <Modals
            show={!!contact}
            title="Contact"
            onHide={onHide}
        >
            <div className='my-3'>
                <div className='mt-3'><b>Name:</b> {contact?.firstName} {contact?.lastName}</div>
                <div className='mt-3'><b>Email:</b> {contact?.email}</div>
                <div className='mt-3'><b>Phone number:</b> {contact?.phoneNumber}</div>
                <div className='mt-3'><b>Company name:</b> {contact?.company}</div>
            </div>
        </Modals>
    )
}