import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Navbar.css'
import ghlogo from '../assets/GitHub-Symbol.png'

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const disableHamMenu = () => setClick(false);
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='https://github.com/user040213' className='ghlogo'>
                    <img src={ghlogo}/>
                </a>
                <div className='menu-button' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu-list active' : 'nav-menu-list'}>
                    <li className='nav-item' onClick={disableHamMenu}>
                        <a href='#home'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item' onClick={disableHamMenu}>
                        <a href='#projJump'>
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}