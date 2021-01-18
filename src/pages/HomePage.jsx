import React from 'react'

export default function HomePage() {
    return (
        <div>
            <h2>Logged in... succes!</h2>
            <div>
                <button className="col-md-3 col-3 btn btn-primary">Create User</button>
                <button className="ml-3 col-md-3 col-3 btn btn-primary">View Users</button>
            </div>
            <div className="mt-3">
                <button className="col-md-3 col-3 btn btn-danger">Delete User</button>
                <button className="ml-3 col-md-3 col-3 btn btn-danger">Log Out</button>
            </div>
            
        </div>
    )
}
