import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from './context/DataContext';


const EditPost = () => {
    const { posts, editPost, deletePost } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts?.find((p) => String(p.id) === String(id));

    const [form, setForm] = useState({ name: '', email: '', title: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (post) setForm({ name: post.name || '', email: post.email || '', title: post.title || '', message: post.message || '' });
    }, [post]);

    if (!post) return <div>Post not found</div>;

    const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await editPost(id, form);
            navigate('/');
        } catch (err) {
            setError('Failed to save changes');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="add-post">Edit Post</h2>
            <form className="add-post" onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input name="title" value={form.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
                {/* Delete button */}
                <button
                    type="button"
                    disabled={loading}
                    onClick={async () => {
                        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
                        if (!confirmDelete) return;
                        setLoading(true);
                        setError(null);
                        try {
                            await deletePost(id);
                            navigate('/');
                        } catch (err) {
                            setError('Failed to delete post');
                            console.error(err);
                        } finally {
                            setLoading(false);
                        }
                    }}
                >
                    Delete
                </button>
            </form>
        </div>
    );
};

export default EditPost;