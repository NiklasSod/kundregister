import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ViewPage() {

    const [customerList, setCustomerList] = useState([])

    useEffect( () => {
        getCustomerList()
    }, [])

    function getCustomerList() {
        const url = "https://frebi.willandskill.eu/api/v1/customers" // s?
        const token = localStorage.getItem("superSecretLogInToken")
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCustomerList(data.results))
    }

    return (
        <div>
            <h2 className="mb-4">View Customers!</h2>
            {customerList.map(item => {
                return (
                    <div>
                        <p className="btn btn-info" key={item.id}>{item.name}</p>
                        <br/>
                    </div>
                )
            })}
            <Link to="/home" className="btn btn-secondary">Back to homepage</Link>
        </div>
    )
}
