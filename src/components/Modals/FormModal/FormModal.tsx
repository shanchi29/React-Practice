import React, {Dispatch, SetStateAction} from 'react';
import { Modal } from 'antd';
import ReactHookForm from "../../Forms/ReactHookForm/ReactHookForm";
import {FormData} from "../../Forms/ReactHookForm/types";

interface FormModalProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    isModalOpen: boolean;
    setFormData: Dispatch<SetStateAction<FormData[]>>;
    formData: FormData[];
}

const FormModal: React.FC<FormModalProps> = ({setIsModalOpen, isModalOpen, setFormData, formData}) => {
    return (
        <>
            <Modal
                footer={null}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
            >
                <ReactHookForm
                    setFormData={setFormData}
                    formData={formData}
                    setIsModalOpen={setIsModalOpen}
                />
            </Modal>
        </>
    );
};

export default FormModal;