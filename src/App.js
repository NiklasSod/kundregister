import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  
  // this function is like getMe and is not needed, just a test
  // It's more so i could learn to implement it in other fetch getters
  // Like getting the token to send it when i am logged in and want ta continue talk with backend

  // function getSuperSecretLogInToken() {
  //   const token = localStorage.getItem("superSecretLogInToken")
  //   const url = "https://frebi.willandskill.eu/api/v1/me/"
  //   fetch(url, {
  //     method: "GET",
  //     header: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route path="/home/">
              <HomePage/>
            </Route>
            <Route path="/">
              <LoginPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
