import React from 'react';
import { Modal } from 'antd';
import ReactHookForm from "../../Forms/ReactHookForm/ReactHookForm";
import {useAppDispatch, useAppSelector} from "../../../store/hook/reduxHooks";
import {setIsModalOpenForm} from "../../../store/slices/modals/modalSlice";
import {
    selectIsModalOpen
} from "../../../store/selectors/selectors";

const FormModal: React.FC = () => {
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector(selectIsModalOpen)

    const handleCloseModal = () => {
        dispatch(setIsModalOpenForm(false));
    };

    return (
        <>
            <Modal
                footer={null}
                open={isModalOpen}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
            >
                <ReactHookForm/>
            </Modal>
        </>
    );
};

export default FormModal;