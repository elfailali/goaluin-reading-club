import React from 'react'
import './NoPageFound.css';
import { Link } from 'react-router-dom';

function NoPageFound() {
  return (
    <>
      <div className='NoPage'>
          <p class="text_404">404</p>
          <h3>Oops, That page doesn't exist!</h3>
          <Link to='/'>Go Home</Link>
      </div>
    </>

  )
}

export default NoPageFound