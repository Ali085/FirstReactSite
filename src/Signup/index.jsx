import React from 'react'
import './index.scss'
function Signup() {
    return (
        <>
            <section className='sign'>
                <div className='signDiv'>
                    <div className='signTxt'>
                        <h3>New products, delivered to you.</h3>
                        <p>Sign up for our newsletter for the latest updates.</p>
                    </div>
                    <div className='signINP'>
                        <div>
                            <input type="text" placeholder='Email address...' />
                            <button>Sign Up</button>
                        </div>
                        <div>
                            <p>We care about privacy, and will never share your data.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup