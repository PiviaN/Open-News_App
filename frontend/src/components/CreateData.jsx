import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './CreateData.css'

import { useAuth0 } from '@auth0/auth0-react'

const baseUrl = 'http://localhost:3001/news'

const CreateData = () => {

    const [article, setArticle] = useState({
        file: '',
        subject: '',
        title: '',
        description: '',
        author: '',
        list: []
    })

    const { user, isAuthenticated, loginWithRedirect } = useAuth0();

    // componentDidMount() {
    //     axios(baseUrl).then(resp => {
    //         this.setState({ list: resp.data })
    //     })
    // }

    useEffect(() => {
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(data => setArticle({ list: data }))
    })

    const clear = () => {
        setArticle(article)
    }

    const getUpdatedList = (data, add = true) => {
        const list = article.list.filter(u => u.id !== article.id)
        if (add) list.unshift(data)
        return list
    }

    const save = (event) => {
        event.preventDefault()
        console.log(article)

        // setArticle({ author: user.name })

        // const method = article.id ? 'put' : 'post'
        // const url = article.id ? `${baseUrl}/${article.id}` : baseUrl
        // axios[method](url, article)
        //     .then(resp => {
        //         const list = getUpdatedList(resp.data)
        //         // this.setState({ news: initialState.news, list })
        //         setArticle({ article, list })
        //     })
        // alert('Your news was posted succesfully! :)')
    }

    const updateField = event => {
        article[event.target.name] = event.target.value
        setArticle(article)
    }

    const updateFile = event => {
        const file = event.target.files[0]

        const reader = new FileReader();

        reader.onload = (e) => {
            const result = e.target.result
            article[event.target.name] = result
            setArticle(article)
        }

        reader.readAsDataURL(file)
    }


    const renderForm = () => {
        return (
            <form className="form" onSubmit={save}>
                <label htmlFor="file" className="label">Upload Image:
                <input type="file" onChange={updateFile}
                        accept="image/gif, image/jpeg, image/png" name="file"
                        className="input-file" />
                </label>

                <label htmlFor="subject" className="label">Subject:
                    <input type="text" name="subject" value={article.subject}
                        onChange={updateField} maxLength="10"
                        minLength="4" required className="short-input"
                        placeholder="Put the subject here" />
                </label>

                <label htmlFor="title" className="label">Title:
                    <input type="text"
                        name="title" value={article.title}
                        onChange={updateField}
                        minLength="8" maxLength="28" required
                        className="short-input"
                        placeholder="Put the title in here" />
                </label>


                <label htmlFor="description" className="label">Description:
                    <textarea type="text"
                        name="description" value={article.description}
                        onChange={updateField} minLength="16"
                        maxLength="160" required className="description-input"
                        placeholder="Put the description here" >
                    </textarea>
                </label>

                <div className="btns">
                    <button className="button-save"
                        onSubmit={save}>Save</button>
                    <button className="button-cancel"
                        onClick={clear}>Cancel</button>
                </div>
            </form>
        )
    }

    return (
        (isAuthenticated ? (
            <>
                {renderForm()}
            </>
        )
            :
            <div className="center">
                <div className="modal-container">
                    <div className="modal">
                        <h1>Login Required</h1>
                        <p>You need to be logged-in to submit a new post.
                        Click the button below and you will be redirected
                        to it.
                    </p>
                        <button className="button-login" onClick={() => loginWithRedirect()}>
                            Log In
                    </button>
                    </div>
                </div>
            </div>
        )
    )
}

export default CreateData