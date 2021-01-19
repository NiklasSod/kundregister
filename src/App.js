import React from "react"
import { Switch, Route } from "react-router-dom"
import CreatePage from "./pages/CreatePage";
import DeletePage from "./pages/DeletePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UpdatePage from "./pages/UpdatePage";
import ViewPage from "./pages/ViewPage";

function App() {
  
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
            <Route path="/view">
              <ViewPage/>
            </Route>

            <Route path="/update">
              <UpdatePage/>
            </Route>

            <Route path="/home">
              <HomePage/>
            </Route>

            <Route path="/delete">
              <DeletePage/>
            </Route>

            <Route path="/create">
              <CreatePage/>
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
