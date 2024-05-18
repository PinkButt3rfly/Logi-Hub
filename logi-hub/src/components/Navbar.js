import React from 'react'


const Navbar = () => {
  return (
    <div className="container-md" >
    <nav className="navbar navbar-expand-md">
        <div className="container-fluid">

            <a href="./" className="navbar-brand">Logi<span>Hub</span></a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">

                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="./">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/splitscreen">Become a Vendor</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/">Support</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>

        
                
                <div className="ml-auto">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                    <a href="splitscreen" className="btn">Register</a>
                </div>
            </div>
        </div>
    </nav>
  </div>
  )
}

export default Navbar

 
