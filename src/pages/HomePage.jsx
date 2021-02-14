import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory()

    function deleteToken(e) {
        e.preventDefault()
        localStorage.setItem("superSecretLogInToken", "")
        history.push("/")
    }

    function currentUserInfo(e) {
        const url = "https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("superSecretLogInToken")
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <h2>Logged in... succes!</h2>
            <div>
                <Link to="/create" className="col-md-5 col-5 btn btn-success">Create Customer</Link>
                <Link to="/view" className="ml-3 col-md-5 col-5 btn btn-primary">View Customer</Link>
            </div>
            <br/>
            <div>
                <Link to="/delete" className="col-md-5 col-5 btn btn-danger">Delete Customer</Link>
                <Link to="/update" className="ml-3 col-md-5 col-5 btn btn-info">Update Customer</Link>
            </div>
            <br/>
            <Link onClick={deleteToken} to="/" className="col-md-5 col-5 btn btn-dark">Log Out</Link>
            <button onClick={currentUserInfo} className="ml-3 col-md-5 col-5 btn btn-info">
                Console log logged in user info
            </button>
        </div>
    )
}
