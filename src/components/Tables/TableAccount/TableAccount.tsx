import React from 'react';
import {  Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    password: string;
    comments: string;
}
const TableAccount: React.FC = () => {

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
        },

    ];

    const data: DataType[] = [
        {
            key: '',
            name: '',
            password: '',
            comments: ''
        },
        {
            key: '',
            name: '',
            password: '',
            comments: ''
        },
        {
            key: '',
            name: '',
            password: '',
            comments: ''
        },
    ];
    return (
        <Table style={{margin: '0 500px'}} columns={columns} dataSource={data}/>
    )
};
export default TableAccount;
