import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory()

    function deleteToken(e) {
        e.preventDefault()
        localStorage.setItem("superSecretLogInToken", "")
        history.push("/")
    }

    return (
        <div>
            <h2>Logged in... succes!</h2>
            <div>
                <Link to="/create" className="col-md-3 col-3 btn btn-primary">Create User</Link>
                <button className="ml-3 col-md-3 col-3 btn btn-primary">View Users</button>
            </div>
            <div className="mt-3">
                <button className="col-md-3 col-3 btn btn-danger">Delete User</button>
                <Link onClick={deleteToken} to="/" className="ml-3 col-md-3 col-3 btn btn-danger">Log Out</Link>
            </div>
            
        </div>
    )
}
