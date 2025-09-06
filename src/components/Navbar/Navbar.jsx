import React, {useEffect, useState} from 'react';

import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const switchState = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTrigger = 100;

            if (window.scrollY > scrollTrigger) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <>
            <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
                <div>
                    <a id={"nav-title"} href={"#"}>Meu Portfólio</a>

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