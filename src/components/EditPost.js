import React, { useState } from "react";
import './EditPost.css'

function EditPost(props) {


  const addPost = props.addPost;

  console.log(props, addPost)

  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // not refresh page after click submit


        // add post
        const newPost = {
          id: Date.now(),
          title: title,
          body: description,
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        };
    
        console.log('new post:', newPost);

        addPost(newPost);

        console.log('new post:', newPost);
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