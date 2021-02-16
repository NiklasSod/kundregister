import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerInfo({customerData}) {
    return (
        <div>
            <h3>
                <Link to={`/view/${customerData.id}`}
                className="btn btn-info" >
                    {customerData.name}
                </Link>
            </h3>
        </div>
    )
}