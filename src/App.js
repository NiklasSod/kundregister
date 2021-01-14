import react, { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    email: "Niklas.Soderberg@yh.nackademin.se",
    password: "javascriptoramverk"
  })

  function handleOnChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function showPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="ml-2">Welcome!</h1>
          <form>
            <label className="col-md-2">Email:</label>
            <input name="email" onChange={handleOnChange} value={formData.email} className="col-md-5" />
            <p className="col-md-5" />
            <label className="col-md-2">Password:</label>
            <input id="password" name="password" onChange={handleOnChange} value={formData.password} className="col-md-5" type="password" />
            <p className="col-md-5" />
            <input type="checkbox" onClick={showPassword}/>
            <p>Show Password</p>
            <button className="col-md-2 btn btn-primary" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
