import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = props => {
    return (
        <header>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/news" className="first">News</Link>
                    </li>
                    <li>
                        <Link to="/create" className="second">Create</Link>
                    </li>
                    <li>
                        <Link to="/about" className="third">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu