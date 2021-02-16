import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HeadingStyled } from '../components/HeadingStyled'

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
        .then(data => console.log(`Email: ${data.email}, First name: ${data.firstName}, Last name ${data.lastName}`))
    }

    return (
        <div>
            <HeadingStyled className="ml-4">Welcome</HeadingStyled>
            <div className="mt-3">
                <Link to="/create" className="ml-3 col-md-5 col-5 btn btn-success">Create Customer</Link>
                <Link to="/view" className="ml-3 col-md-5 col-5 btn btn-primary">View Customer</Link>
            </div>
            <br/>
            <div>
                <button onClick={currentUserInfo} className="ml-3 col-md-5 col-5 btn btn-info">
                    Console log current user info
                </button>
                <Link onClick={deleteToken} to="/" className="ml-3 col-md-5 col-5 btn btn-dark">Log Out</Link>
            </div>
        </div>
    )
}
