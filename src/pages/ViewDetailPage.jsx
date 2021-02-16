import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ViewDetailPage(props) {

    const customerId = props.match.params.id

    const [viewDetail, setViewDetail] = useState({}) // obj, can be seen on chrome - network - preview

    useEffect( () => {
        getViewDetail()
    }, [] ) //note to self - empty array as dependency will trigger when component loads

    function getViewDetail() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem("superSecretLogInToken")
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setViewDetail(data))
    }

    console.log(viewDetail)

    return (
        <div className="">
            <h3>Customer: {viewDetail.name} - Details</h3>
            <p>Organisation Number: {viewDetail.organisationNr}</p>
            <p>Vat Number: {viewDetail.vatNr}</p>
            <p>Reference: {viewDetail.reference}</p>
            <p>Payment Term: {viewDetail.paymentTerm}</p>
            <p>Website: <a target="_blank" href={viewDetail.website}>{viewDetail.website}</a></p>
            <p>Email: <a href={"mailto:" + viewDetail.email}>{viewDetail.email}</a></p>
            <p>Phone Number: {viewDetail.phoneNumber}</p>
        </div>
    )
}
