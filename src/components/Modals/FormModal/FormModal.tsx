import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ReactHookForm from "../../components/ReactHookForm/ReactHookForm";


const FormModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ReactHookForm />
            </Modal>
        </>
    );
};

export default FormModal;