import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CardUser from "../../CardUser/CardUser";

interface FormModalUserProps {
    setIsModalOpenCard: any;
    isModalOpenCard: any;
    selectedRow: any;
}

const UserCardModal: React.FC<FormModalUserProps> = ({setIsModalOpenCard, isModalOpenCard, selectedRow}) => {

    return (
        <div>
            <Modal footer={null} open={isModalOpenCard} onOk={() => setIsModalOpenCard(false)} onCancel={() => setIsModalOpenCard(false)}>
                <CardUser selectedRow={selectedRow} />
            </Modal>
        </div>
    );
};

export default UserCardModal;