import React from 'react'
import './index.scss'

function HomeSection() {
  return (
   <>
    <section className='Home'>
        <div className='HomeDiv'>
            <div className='HomeLeft'>
                <div className='HomeTxt'>
                <h1>A Bootstrap 5 template for modern businesses</h1>
                <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                </div>
                <div className='HomeButton'>
                    <button className='Get'>Get Started</button>
                    <button className='Learn'>Learn More</button>
                </div>
            </div>
            <div className='HomeImg'> <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="Foto" /></div>
        </div>
    </section>
   </>
  )
}

export default HomeSection