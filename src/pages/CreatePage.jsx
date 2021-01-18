import React, { useState } from 'react'

export default function CreatePage() {

    const [formData, setFormData] = useState({})

    function renderInput(name, label, type) {
        return (
            <div>
                <label>{label}</label>
                <br/>
                <input type={type || "text"} name={name} 
                onChange={e => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
                <hr/>
            </div>
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("superSecretLogInToken")
        fetch (url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json())
        // add data to useContext
        .then( data => console.log(data))
    }

    return (
        <div>
            <h1 className="mb-3">Create Customer</h1>
            <form onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                {renderInput("reference", "Reference")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("website", "Website", "url")}
                <button type="submit" className="btn btn-primary">Create Customer</button>
            </form>
            {/* {JSON.stringify(formData)} */}
        </div>
    )
}
