import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Create = props => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
            <div className="create">
                {props.children}
            </div>

        ) : <div className="modal-container">
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
    )
}

export default Create