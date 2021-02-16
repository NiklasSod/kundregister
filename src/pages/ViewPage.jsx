import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CustomerInfo from '../components/CustomerInfo'
import { HeadingStyled } from '../components/HeadingStyled'

export default function ViewPage() {

    const [customerList, setCustomerList] = useState([])

    useEffect( () => {
        getCustomerList()
    }, [])

    function getCustomerList() {
        const url = "https://frebi.willandskill.eu/api/v1/customers" // s?
        const token = localStorage.getItem("superSecretLogInToken")
        fetch(url, {
            // get is default
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
            <HeadingStyled className="mb-4">View Customers!</HeadingStyled>
            {customerList.map(item => {
                return (
                    <div>
                        <CustomerInfo key={item.id} customerData={item} />
                        <br/>
                    </div>
                )
            })}
            <Link to="/home" className="btn btn-secondary">Back to homepage</Link>
        </div>
    )
}
