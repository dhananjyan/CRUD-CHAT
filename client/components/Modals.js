import React from 'react'
import { Modal } from 'react-bootstrap'

export default function Modals(props) {
    const { children, closeButton = true, title, ...rest } = props;
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
            {...rest}
        >
            <Modal.Header closeButton={closeButton}>
                {title && <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
