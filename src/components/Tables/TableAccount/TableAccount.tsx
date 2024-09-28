import React, {Dispatch, SetStateAction} from 'react';
import {Table} from 'antd';
import {columns} from "./constants";
import styles from './TableAccount.module.scss'
import {Button} from "../../ui/Button/Button";
import {useAppSelector} from "../../../store/hook/reduxHooks";
import {selectFormData} from "../../../store/selectors/selectors";


export interface DataType{
    key: string;
    name: string;
    password: string;
    comments: string;
}

interface TableAccountProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    formData: FormData[];
    setIsModalOpenCard: Dispatch<SetStateAction<boolean>>;
    setSelectedRow: Dispatch<SetStateAction<FormData>>;
}

const TableAccount: React.FC<TableAccountProps> = ({
     setIsModalOpen,
     formData,
     setIsModalOpenCard,
     setSelectedRow
}: TableAccountProps) => {

    const formData1 = useAppSelector(selectFormData)

    const handleRowClick = (row: FormData) => {
        setIsModalOpenCard(true)
        setSelectedRow(row)
    }

    return (
        <div className={styles.table}>
            <h1>Пользователи</h1>
            <Button
                onClick={() => setIsModalOpen(true)}
                className={styles.button}
                type="primary"
                text='Добавить'
            />
        <Table
            onRow={(row) => ({
                onDoubleClick: () => handleRowClick(row),
            })}
            style={{
            width: '100%'
        }}  columns={columns} dataSource={formData1}/>
        </div>
    )
};
export default TableAccount;
