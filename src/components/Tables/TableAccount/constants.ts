const columns: DataType ['columns'] = [
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
        key: '1',
        name: 'Графов Дмитрий',
        password: '123',
        comments: 'hello'
    },
    {
        key: '2',
        name: 'Цой Владимир',
        password: '456',
        comments: 'aloha'
    },
    {
        key: '3',
        name: 'Луганский Михаил',
        password: '789',
        comments: 'hi'
    },
];