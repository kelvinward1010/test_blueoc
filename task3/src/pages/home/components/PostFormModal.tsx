import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Post } from '../../../types';
import { addPost } from '../../../redux/slices/postsSlice';

const PostFormModal: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        const newPost: Post = {
            id: Math.random(),
            title,
            body,
        };
        dispatch(addPost(newPost));
        setTitle('');
        setBody('');
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add New Post
            </Button>
            <Modal
                title="Add New Post"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Submit"
                cancelText="Cancel"
            >
                <Form layout="vertical">
                    <Form.Item label="Title">
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Body">
                        <Input.TextArea value={body} onChange={(e) => setBody(e.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default PostFormModal;
