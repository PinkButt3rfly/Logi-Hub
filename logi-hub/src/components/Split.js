import React from 'react'
import Navbar from './Navbar'


const Split = () => {
  return (
      <>
   
    <div>
  
  
      <div className="container-fluid-md custom-container-A">
            <Navbar />
            <div className="row">
                <div className="col-md-6 screen1">
                    <h1>Sign up  as a customer</h1>
                    <p>Send your goods fast, cheap, comfortable and safe</p>
                    <a className="btn" href="#">Get Started</a>
                </div>

                <div className="col-md-6 screen2">
                    <h1>Become a vendor</h1>
                    <p>Do you own a small logistics business and you will like to increase your customer reach, 
                        and double your earning?, become a vendor  of logiHub,  you register your vehicles with us, 
                        we sed you customers.
                    </p>
                    <a className="btn" href="#">Get Started</a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Split
