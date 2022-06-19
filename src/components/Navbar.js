import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    render() { 
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                WCE
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                </ul>

              </div>
              <div className="topnav">
  
  <div className="login-container">
    <form action="/action_page.php">
      <button type="submit">Sign In</button>
    </form>
  </div>
</div>
            </div>
          </nav>
          
          
          
         
        );
    }
}
 
export default Navbar;