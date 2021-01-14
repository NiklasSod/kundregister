import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";

function App() {
  
  function getSuperSecretLogInToken() {
    const token = localStorage.getItem("superSecretLogInToken")
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    fetch(url, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route path="/login" >
              <LoginPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
