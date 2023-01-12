import React from 'react'
import './index.scss'

function StartBuilding() {
    return (
        <>
            <section className='Better'>
                <div className='BetterDiv'>
                    <div className='BetterTxt'><h2>A better way to start building.</h2></div>
                    <div className='BetterRight'>
                        {/* ///////////////////////////////////////// */}
                        <div className='BetterFirstLine'>
                            <div>
                            <i class="fa-solid fa-layer-group"></i>
                            <h4>Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                            </div>
                            <div>
                            <i class="fa-solid fa-city"></i>
                            <h4>Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                            </div>
                        </div>
                        {/* ////////////////////////////////////// */}
                        <div className='BetterSecondLine'>
                            <div>
                            <i class="fa-brands fa-slack"></i>
                            <h4>Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                            </div>
                            <div>
                            <i class="fa-brands fa-slack"></i>
                            <h4>Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                            </div>
                        </div>
                        {/* ///////////////////////////////////////////// */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default StartBuilding 