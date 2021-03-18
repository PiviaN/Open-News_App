import React, { Component } from 'react'
import axios from 'axios'

import './CreateData.css'

import Create from '../components/Create'

const baseUrl = 'http://localhost:3001/news'

const accountsUrl = 'http://localhost:3001/accounts'

const initialState = {
    news: { file: '', subject: '', title: '', description: '', author: '' },
    list: [], accounts: []
}

class CreateData extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
        axios(accountsUrl).then(resp => {
            this.setState({ accounts: resp.data })
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
        alert('Your news was posted succesfully! :)')
    }

    updateField(event) {
        const news = { ...this.state.news }
        news[event.target.name] = event.target.value
        this.setState({ news })
        console.log(this.state.accounts)
    }

    updateFile(event) {
        const file = event.target.files[0]

        const reader = new FileReader();

        reader.onload = (e) => {
            const result = e.target.result

            const news = { ...this.state.news }
            news[event.target.name] = result
            this.setState({ news })
            console.log(result)
        }

        reader.readAsDataURL(file)
    }


    renderForm() {
        return (
            <form className="form" onSubmit={() => this.save()}>
                <label htmlFor="file" className="label">Upload Image:
                <input type="file" onChange={e => this.updateFile(e)}
                        accept="image/gif, image/jpeg, image/png" name="file"
                        className="input-file" />
                </label>

                <label htmlFor="subject" className="label">Subject:
                    <input type="text" name="subject" value={this.state.news.subject}
                        onChange={e => this.updateField(e)} maxLength="10"
                        minLength="4" required className="short-input"
                        placeholder="Put the subject here" />
                </label>

                <label htmlFor="title" className="label">Title:
                    <input type="text"
                        name="title" value={this.state.news.title}
                        onChange={e => this.updateField(e)}
                        minLength="8" maxLength="28" required
                        className="short-input"
                        placeholder="Put the title in here" />
                </label>


                <label htmlFor="description" className="label">Description:
                    <textarea type="text"
                        name="description" value={this.state.news.description}
                        onChange={e => this.updateField(e)} minLength="16"
                        maxLength="160" required className="description-input"
                        placeholder="Put the description here" >
                    </textarea>
                </label>


                <label htmlFor="author" className="label">Author:
                    <input type="text" name="author" value={this.state.news.author}
                        onChange={e => this.updateField(e)} minLength="3"
                        maxLength="14" required className="short-input"
                        placeholder="Put the author here" />
                </label>


                <div className="btns">
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
            <>
                <Create>
                    {this.renderForm()}
                </Create>
            </>
        )
    }
}

export default CreateData