import React from 'react';
import {Table} from 'antd';
import {columns} from "./constants";
import styles from './TableAccount.module.scss'
import {Button} from "../../ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../store/hook/reduxHooks";
import {
    selectFormData,
} from "../../../store/selectors/selectors";
import {
    setIsModalOpenCardForm,
    setIsModalOpenForm
} from "../../../store/slices/modals/modalSlice";
import {
    setSelectedRow
} from "../../../store/slices/table/tableSlice";

export interface DataType{
    key: string;
    name: string;
    password: string;
    comments: string;
}
const TableAccount: React.FC = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector(selectFormData)

    const handleRowClick = (row: FormData) => {
        dispatch(setIsModalOpenCardForm(true))
        dispatch(setSelectedRow(row));
    }

    return (
        <div className={styles.table}>
            <h1>Пользователи</h1>
            <Button
                onClick={() => dispatch(setIsModalOpenForm(true))}
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
        }}  columns={columns} dataSource={formData}/>
        </div>
    )
};
export default TableAccount;
