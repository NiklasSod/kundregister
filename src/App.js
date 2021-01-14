import react from "react"
import {  } from "react-router-dom"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="ml-2">Welcome!</h1>
          <form>
            <label className="col-md-2">Email:</label>
            <input className="col-md-3" />
            <label className="col-md-2">Password:</label>
            <input className="col-md-3" />
            <br /> <br />
            <button className="col-md-2 btn btn-primary" type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
