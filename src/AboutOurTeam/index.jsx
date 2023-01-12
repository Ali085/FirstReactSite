import React from 'react'
import '../AboutOurTeam/index.scss'

function AboutOurTeam() {
    return (
        <section className='Team'>
            <div className='TeamDiv'>
                <div className='TeamHead'> 
                    <h2>Our team</h2>
                    <p>Dedicated to quality and your success</p>
                </div>
                <div className='TeamList'>
                    <div>
                        <img src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                        <h3>Ibbie Eckart</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div>
                        <img src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                        <h3>Arden Vasek</h3>
                        <p>CFO</p>
                    </div>
                    <div>
                        <img src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                        <h3>Toribio Nerthus</h3>
                        <p>Operations Manager</p>
                    </div>
                    <div>
                        <img src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                        <h3>Malvina Cilla</h3>
                        <p>CTO</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOurTeam