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
                <Link to="/create" className="col-md-5 col-5 btn btn-success">Create Customer</Link>
                <button className="ml-3 col-md-5 col-5 btn btn-primary">View Customer</button>
            </div>
            <br/>
            <div>
                <button className="col-md-5 col-5 btn btn-danger">Delete Customer</button>
                <button className="ml-3 col-md-5 col-5 btn btn-info">Update Customer</button>
            </div>
            <br/>
            <Link onClick={deleteToken} to="/" className="col-md-5 col-5 btn btn-dark">Log Out</Link>
        </div>
    )
}
