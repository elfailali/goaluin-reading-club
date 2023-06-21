import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditPost from './components/EditPost';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import Post from './components/Post';
import SignUp from './components/SignUp';
import NoPageFound from './NoPageFound';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route path='signUp' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>

    </>
    
  );
}

export default App;
