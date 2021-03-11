import React from 'react'

import './Menu.css'

const Menu = props => {
    return (
        <header>
            <h1>Welcome to the Open News!</h1>
            <nav>
                <ul className="menu">
                    <li><a href="/news" className="first">News</a></li>
                    <li><a href="/create" className="second">Create</a></li>
                    <li><a href="/about" className="third">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu