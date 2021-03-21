import React, { useState, useEffect } from 'react'

import './NewsData.scss'

import { useAuth0 } from '@auth0/auth0-react'

const baseUrl = 'http://localhost:3001/news'

const NewsData = () => {

    const { loginWithRedirect } = useAuth0();

    const [list, setList] = useState([])
    const [order, setOrder] = useState('')

    useEffect(() => {
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(data => setList(data))
    })

    const renderCard = () => {
        return list.map((news, index) => {
            return (
                <div className="container" key={index}>
                    <div className="post">
                        <div className="header_post">
                            <img src={news.file} alt="posted-by-user" />
                        </div>

                        <div className="body_post">
                            <div className="post_content">
                                <h1>{news.title}</h1>
                                <p>{news.description}</p>

                                <div className="container_infos">
                                    <div className="postedBy">
                                        <span>author</span>
                                        {news.author}
                                    </div>

                                    <div className="container_tags">
                                        <span>Subject:</span>
                                        <div className="tags">
                                            <ul>
                                                <li>{news.subject}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    let displayOrder = renderCard()

    if (order === "older-ones")
        displayOrder = renderCard().sort().reverse()

    const changeSelect = (e) => {
        setOrder(e.target.value)
    }

    return (
        <div className="news">
            <select name="order" className="order-select" onChange={(e) => changeSelect(e)}>
                <option value="new-ones" defaultValue >Order by the older ones</option>
                <option value="older-ones">Order by the new ones</option>
            </select>
            {displayOrder}
        </div>
    )
}

export default NewsData