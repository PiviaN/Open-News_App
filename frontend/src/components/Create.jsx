import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Create = props => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
            <div className="create">
                {props.children}
            </div>
        ) : <button onClick={() => loginWithRedirect()}>
            Log In
    </button>
    )
}

export default Create