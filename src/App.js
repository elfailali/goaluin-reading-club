import {Route, Routes } from 'react-router-dom';
import './App.css';
import EditPost from './components/EditPost';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import Post from './components/Post';
import SignUp from './components/SignUp';
import NoPageFound from './components/NoPageFound';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path="*" element={<NoPageFound />} />
          <Route path="posts" element={<Post />} />

        </Routes>

    </>
    
  );
}

export default App;
