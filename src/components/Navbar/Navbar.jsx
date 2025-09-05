import React, {useState} from 'react';

import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const switchState = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="navbar-container">
                <div>
                    <p>João Cláudio</p>

                    <button className={`menu-hamburger ${isOpen ? 'open' : ''}`} onClick={switchState}>
                        <span className={`material-symbols-outlined`}>menu</span>
                    </button>

                    <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
                        <li><a onClick={switchState} href="#skills">Skills</a></li>
                        <li><a onClick={switchState} href="#projects">Projetos</a></li>
                        <li><a onClick={switchState} href="#contact">Contato</a></li>
                    </ul>

                </div>
            </nav>
        </>
    );
};

export default Navbar;