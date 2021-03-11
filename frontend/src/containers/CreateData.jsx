import React, { Component } from 'react'
import axios from 'axios'

import './CreateData.css'

import Create from '../components/Create'

const baseUrl = 'http://localhost:3001/news'

const initialState = {
    news: { file: '', subject: '', title: '', description: '', author: '' },
    list: []
}

class CreateData extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ news: initialState.news })
    }

    getUpdatedList(news, add = true) {
        const list = this.state.list.filter(u => u.id !== news.id)
        if (add) list.unshift(news)
        return list
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

    updateField(event) {
        const news = { ...this.state.news }
        news[event.target.name] = event.target.value
        this.setState({ news })
    }

    updateFile(event) {
        const file = event.target.files[0]

        const reader = new FileReader();

        reader.onload = (e) => {
            const result = e.target.result

            const news = { ...this.state.news }
            news[event.target.name] = result
            this.setState({ news })
        }

        reader.readAsDataURL(file)
    }


    renderForm() {
        return (
            <form className="form" onSubmit={() => this.save()}>
                <div className="topFields">
                    <label htmlFor="photo">Photo:</label>
                    <input type="file" onChange={e => this.updateFile(e)}
                        accept="image/gif, image/jpeg, image/png" name="file"
                        id="input-file" />
                    <img 
                    src={this.state.news.file} alt="image-by-user"
                    className="image-display" />

                    <label htmlFor="subject">Subject:</label>
                    <input type="text" className="subject"
                        name="subject" value={this.state.news.subject}
                        onChange={e => this.updateField(e)}
                        id="input-subject" maxLength="28" minLength="5" 
                        required />

                    <label htmlFor="title">Title:</label>
                    <input type="text" className="title"
                        name="title" value={this.state.news.title}
                        onChange={e => this.updateField(e)}
                        id="input-title" minLength="8" maxLength="50" 
                        required />
                </div>

                <div className="midField">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="description"
                        name="description" value={this.state.news.description}
                        onChange={e => this.updateField(e)}
                        id="input-description" minLength="16" maxLength="120" 
                        required />
                </div>

                <div className="bottomField">
                    <label htmlFor="author">Author:</label>
                    <input type="text" className="author"
                        name="author" value={this.state.news.author}
                        onChange={e => this.updateField(e)}
                        id="input-author" minLength="3" maxLength="26" required />
                </div>

                <div className="bottomRightIcons">
                    <button className="button-save"
                        onSubmit={() => this.save()}>Save</button>
                    <button className="button-cancel"
                        onClick={() => this.clear()}>Cancel</button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Create>
                    {this.renderForm()}
                </Create>
            </React.Fragment>
        )
    }
}

export default CreateData