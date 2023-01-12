import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function Navbar() {
    function CreateNav() {
       
        var element =  document.getElementById("burgerNavv");
        element.classList.toggle("mystyle");
    }
    return (
        <>
            <nav>
                <div className='NavDiv'>
                    <div className='NavLogo'>
                        <a href="#!">Start Bootstrap</a>
                    </div>
                    <div className='NavList'>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><a href="#!">Contact</a></li>
                            <li><a href="#!">Pricing</a></li>
                            <li><a href="#!">FAQ</a></li>
                            <li><a href="#!">Blog</a><i class="fa-solid fa-caret-down"></i></li>
                            <li><a href="#!">Portfolio</a><i class="fa-solid fa-caret-down"></i></li>
                        </ul>
                    </div>
                    <div className='Burger'  onClick={CreateNav}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
            <div className='burgerNav' id='burgerNavv' >
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Pricing</a></li>
                    <li><a href="#!">FAQ</a></li>
                    <li><a href="#!">Blog</a><i class="fa-solid fa-caret-down"></i></li>
                    <li><a href="#!">Portfolio</a><i class="fa-solid fa-caret-down"></i></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar