import React from 'react';
import './Header.css';


const Header = ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="headerLogo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"  alt="netflix"></img>
                </a>
            </div>
            <div className="headerUser">
                <a href="/" alt="user">
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"  alt="user"></img>
                </a>
            </div>
        </header>
    );
}

export default Header;