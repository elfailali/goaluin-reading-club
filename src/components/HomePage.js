import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
    <div className='homePage'>
        <div className='left-section'>
            <h3 className=''>Joining The Reading club</h3>
            <Link to='/signup'>
              GET STARTED
            </Link>
        </div>

        <div className='right-section'>
            <img src="./images/studying.svg" alt="read image" />
        </div>

    </div>

    


    </>
  )
}

export default HomePage