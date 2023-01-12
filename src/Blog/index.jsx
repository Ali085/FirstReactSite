import React from 'react'
import './index.scss'

function Blog() {
    return (
        <>
            <section className='Blog'>
                <div className='BlogHeader'>
                    <h2>From our blog</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                </div>
                <div className='BlogCards'>
                  <div>
                    <img src="https://dummyimage.com/600x350/ced4da/6c757d" alt="Foto" />
                    <p className='News'>News</p>
                    <h4>Blog post title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                   <div>
                    <img src="https://dummyimage.com/600x350/ced4da/6c757d" alt="Foto" />
                    <p className='News'>News</p>
                    <h4>Blog post title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                   <div>
                    <img src="https://dummyimage.com/600x350/ced4da/6c757d" alt="Foto" />
                    <p className='News'>News</p>
                    <h4>Blog post title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div className='Mans'>
                    <div className='MansDiv'>
                        <div>
                           <img src="https://dummyimage.com/40x40/ced4da/6c757d" alt="Foto" /> 
                        </div>
                        <div>
                            <h4>Kelly Rowan</h4>
                            <p>March 12, 2022 · 6 min read</p>
                        </div>
                    </div>
                    <div className='MansDiv'>
                    <div>
                           <img src="https://dummyimage.com/40x40/ced4da/6c757d" alt="Foto" /> 
                        </div>
                        <div>
                            <h4>Josiah Barclay</h4>
                            <p>March 23, 2022 · 4 min read</p>
                        </div>
                    </div>
                    <div className='MansDiv'>
                    <div>
                           <img src="https://dummyimage.com/40x40/ced4da/6c757d" alt="Foto" /> 
                        </div>
                        <div>
                            <h4>Evelyn Martinez</h4>
                            <p>April 2, 2022 · 10 min read</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog