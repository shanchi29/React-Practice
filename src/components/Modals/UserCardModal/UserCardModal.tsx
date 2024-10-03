import React from 'react';
import { Modal } from 'antd';
import CardUser from "../../CardUser/CardUser";
import {useAppDispatch, useAppSelector} from "../../../store/hook/reduxHooks";
import {
    selectIsModalOpenCard,
    selectSelectedRow
} from "../../../store/selectors/selectors";
import {setIsModalOpenCardForm} from "../../../store/slices/modals/modalSlice";



const UserCardModal: React.FC = () => {
    const dispatch = useAppDispatch();
    const isModalOpenCard = useAppSelector(selectIsModalOpenCard)

    const handleCloseModalCard = () => {
        dispatch(setIsModalOpenCardForm(false));
    };

    return (
        <div>
            <Modal footer={null}
                   open={isModalOpenCard}
                   onOk={handleCloseModalCard}
                   onCancel={handleCloseModalCard}>
                <CardUser />
            </Modal>
        </div>
    );
};

export default UserCardModal;