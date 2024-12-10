import React from 'react';
import { Table } from 'antd';
import { Post } from '../../../types';

interface PostsTableProps {
    posts: Post[];
}

const PostsTable: React.FC<PostsTableProps> = ({ posts }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
        },
    ];

    return <Table dataSource={posts} columns={columns} rowKey="id" />;
};

export default PostsTable;
