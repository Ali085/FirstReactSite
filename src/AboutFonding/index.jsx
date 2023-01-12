import React from 'react'
import '../AboutFonding/index.scss'
function AboutFonding() {
    return (
        <section className='Fonding'>
            <div className='FondingDiv'>
                <div className='OurFonding'>
                    <div className='OurImg'>
                        <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="Foto" />
                    </div>
                    <div className='OurTxt'>
                        <h2>Our founding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                    </div>
                </div>
                <div className='Growth'>
                    <div className='GrowthTxt'>
                    <h2>Growth & beyond</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                    </div>
                    <div className='GrowthImg'>
                        <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="Foto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutFonding