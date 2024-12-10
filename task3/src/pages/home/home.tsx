import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchPosts } from '../../redux/actions/post';
import PostsTable from './components/PostsList';
import PostFormModal from './components/PostFormModal';

export function Home() {
    const dispatch: AppDispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts.posts);
    const postStatus = useSelector((state: RootState) => state.posts.status);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    return (
        <div className="App">
            <h1>Posts</h1>
            <PostFormModal />
            <PostsTable posts={posts} />
        </div>
    );
}
