import React from 'react'
import './News.css'

const News = props => {
    return (
        <div className="news">
            {props.children}
        </div>
    )
}

export default News