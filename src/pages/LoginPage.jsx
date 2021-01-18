import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

export default function LoginPage() {

    const history = useHistory()

    const [formData, setFormData] = useState({
        email: "Niklas.Soderberg@yh.nackademin.se",
        password: "javascriptoramverk"
    })

    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // console.log({...formData, [e.target.name]: e.target.value})
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {
            email: formData.email,
            password: formData.password
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            localStorage.setItem("superSecretLogInToken", data.token)
            history.push("/home")
        })
    }

    function showPassword() {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <div>
            <h1 className="ml-2">Welcome!</h1>
            <form onSubmit={handleOnSubmit}>
                <label className="col-md-2">Email:</label>
                <input name="email" onChange={handleOnChange} value={formData.email} className="col-md-5" />
                <p className="col-md-5" />
                <label className="col-md-2">Password:</label>
                <input id="password" name="password" onChange={handleOnChange} value={formData.password} className="col-md-5" type="password" />
                <p className="col-md-5" />
                <input type="checkbox" onClick={showPassword} />
                <p>Show Password</p>
                <button className="col-md-2 btn btn-primary" type="submit">
                    Log In
                </button>
            </form>
        </div>
    )
}
