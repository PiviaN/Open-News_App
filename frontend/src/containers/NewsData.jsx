import React, { Component } from 'react'
import axios from 'axios'

import './NewsData.css'

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
        return this.state.list.map(news => {
            return (
                <div className="card-container">
                    <div className="card">
                        <div className="card-img"></div>
                        <img src={news.file} alt="Image"/>
                            <div className="card-img-hovered"></div>
                        <div className="card-info">
                            <div className="card-about">
                                <a className="card-tag">{news.subject}</a>
                                <div className="card-time">{new Date().toLocaleTimeString()}</div>
                            </div>
                            <h1 className="card-title">{news.description}</h1>
                            <div className="card-creator">
                                by <span>{news.author}</span>
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