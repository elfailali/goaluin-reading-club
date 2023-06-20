import React from 'react'
import './Post.css'

function Post() {

  const posts = [
    {
      id: 1,
      title: 'First Post',
      body: 'This is the content of the first post.',
      date: 'June 1, 2023'
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is the content of the second post.',
      date: 'June 5, 2023'
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'This is the content of the third post.',
      date: 'June 10, 2023'
    }
  ];
  

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
      {posts.map(post => (
        <div key={post.id} className='post'>
          <h2 className='title'>{post.title}</h2>
          <p className='body'>{post.body}</p>
          <p className='date'>Date: {post.date}</p>
        </div>
      ))}
    </div>
  )
}

export default Post