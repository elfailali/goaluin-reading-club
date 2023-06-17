import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
    <div>
        <div className='left-section'>
            <h3 className=''>Joining The Reading club</h3>

            {/* <Link>
                Get Started
            </Link> */}
        </div>

        <div className='right-section'>
            <h3>hi</h3>
            <img src="./../../public/images/studying.svg" alt="read image" />
            <img src="GitHub-Mark.png" alt="read ge" />

        </div>

    </div>

    


    </>
  )
}

export default HomePage