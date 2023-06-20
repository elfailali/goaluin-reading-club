import { useState, React } from "react";
import './EditPost.css'

function EditPost() {

  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // not refresh page after click submit

        console.log('Title:', title);
        console.log('Description:', description);
    }


  return (
    <div className='EditPost'>
            <h3>New Post</h3>
            <form onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <textarea
                    type='textArea'
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                <button type="submit">Create</button>
            </form>
        </div>
  )
}

export default EditPost