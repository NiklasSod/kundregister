import React from 'react'

export default function DeletePage() {

    // need to check customerId i think i have to go into detailpage to get "customerId"
    // and on that page remove, so deletecustomer will need to show all users first

    function deleteCustomer() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}`
        const token = localStorage.getItem("superSecretLogInToken")
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json)
        .then (data => {
            console.log(data + "hello")
            console.log("apa")
        })
    }

    return (
        <div>
            <h1 className="text-danger">Warning!</h1>
            <h2>Delete User!</h2>
            <button onClick={deleteCustomer}>Test button change later</button>
        </div>
    )
}
