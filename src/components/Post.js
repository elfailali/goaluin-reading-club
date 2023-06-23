import React, { useState } from 'react';

import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Post() {



  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      body: 'This is the content of the first post.',
      date: 'June 1, 2023',
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is the content of the second post.',
      date: 'June 5, 2023',
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'This is the content of the third post.',
      date: 'June 10, 2023',
    },
  ]);

// function to delete posts when click on trash icon
const deletePost = (id) => {
  // ask the user if he really want to delete post
  const confirmation = window.confirm('Are you sure you want to delete this post?');
  if(confirmation){
    console.log('delete the post with id= ' + id);

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }
};
  

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   // Fetch posts data from an API endpoint
  //   axios.get('https://api.example.com/posts').then(response => {
  //       setPosts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error when fetching posts:', error);
  //     });
  // }, 
  // []);

  return (
    <div className='posts'>
      
      <h1>Posts</h1>

      {/* if no post exist */}
      {posts.length === 0 ? (
        <div className='no-post'>No posts available</div>
      ) : (
        posts.map(post => (
        <div key={post.id} className='post'>

          <div className='head-post'>
            <h2 className='title'>{post.title}</h2>
            <FontAwesomeIcon className='trashIcon' icon={faTrashCan} 
              onClick={ () => deletePost(post.id) }
            />
          </div>

          <p className='body'>{post.body}</p>
          <div className='date-section'>
            <FontAwesomeIcon className='calendar-icon' icon={faCalendar} />
            <p className='date'>Date: {post.date}</p>
          </div>

        </div>
      )))
      
      }
      

      
    </div>
  )
}

export default Post