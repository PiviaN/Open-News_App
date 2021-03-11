import React, { Component } from 'react'
import axios from 'axios'

import './NewsCrud.css'

import News from '../components/News'

const baseUrl = 'https://localhost:3001/news'

const initialState = {
    news: { subject: '', title: '', description: '', author: '' },
    list: []
}

class NewsCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ news: initialState.news })
    }

    save() {
        const news = this.state.news
        const method = news.id ? 'put' : 'post'
        const url = news.id ? `${baseUrl}/${news.id}` : baseUrl
        axios[method](url, news)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ news: initialState.news, list })
            })
    }

    getUpdatedList(news, add = true) {
        const list = this.state.list.filter(u => u.id !== news.id)
        if (add) list.unshift(news)
        return list
    }

    updateField(event) {
        const news = { ...this.state.news }
        news[event.target.name] = event.target.value
        this.setState({ news })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="topFields">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" className="subject"
                        name="subject" value={this.state.news.subject}
                        onChange={e => this.updateField(e)} />

                    <label htmlFor="title">Title:</label>
                    <input type="text" className="title"
                        name="title" value={this.state.news.title}
                        onChange={e => this.updateField(e)} />
                </div>

                <div className="midField">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="description"
                        name="description" value={this.state.news.description}
                        onChange={e => this.updateField(e)} />
                </div>

                <div className="bottomField">
                    <label htmlFor="author">Author:</label>
                    <input type="text" className="author"
                        name="author" value={this.state.news.author}
                        onChange={e => this.updateField(e)} />
                </div>

                <div className="bottomRightIcons">
                    <button className="button-save"
                        onClick={() => this.save()}>Save</button>
                    <button className="button-cancel"
                        onClick={() => this.clear()}>Cancel</button>
                </div>
            </div>
        )
    }

    renderCard() {
        return this.state.list.map(news => {
            return (
                <div className="card-container">
                    <div className="card">
                        <div className="card-img"></div>
                        <a href="" className="card-link">
                            <div className="card-img-hovered"></div>
                        </a>
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
            <div>
                <News>
                    {this.renderCard()}
                </News>
            </div>
        )
    }
}

export default NewsCrud