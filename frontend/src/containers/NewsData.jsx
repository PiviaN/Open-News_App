import React, { Component } from 'react'
import axios from 'axios'

import './NewsData.scss'

import News from '../components/News'

const baseUrl = 'http://localhost:3001/news'

const initialState = { list: [] }

class NewsData extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    renderCard() {
        return this.state.list.map((news, index) => {
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

    render() {
        return (
            <React.Fragment>
                <News>
                    {this.renderCard()}
                </News>
            </React.Fragment>
        )
    }
}

export default NewsData