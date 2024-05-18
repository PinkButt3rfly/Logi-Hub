import React from 'react'


const Footer = () => {
  return (
    <div>
      <div className="container-md custom-container6 ">
            <div className="row gx-5">
                <div className="col-md-3">
                    <h2>LogiHub</h2>

                    <div className="icons">
                        
                        <a href="#"><img className="icon1" src="../Assets/icons/faceb.svg" /></a>
                        
                        <a href="#"><img className="icon1" src="../Assets/icons/twit.svg"/></a>

                        <a href="#"><img className="icon1" src="../Assets/icons/link.svg"/></a>

                        <a href="#"><img className="icon1" src="../Assets/icons/insta.svg"/></a>
                        
                    </div>
                </div>

                <div className="col-md-3">
                    <a href="#"><h3 className="custom1">Company</h3></a>
                    <a href="#"><p>Contact us</p></a>
                </div>

                <div className="col-md-3">
                    <a href="#"><h3 class="custom1">Legal</h3></a>
                    <a href="#"><p>Privacy Policy</p></a>
                    <a href="#"><p>Terms of Service</p></a>
                </div>

                <div className="col-md-3">
                    <a href="#"><h3 className="custom1">Help</h3></a>
                    <a href="#"><p>Read our FAQs</p></a>
                </div>
            </div>

            <hr className="break"/>
            <div className="footer">
                &copy; 2024 LogiHub. All rights reserved.
            </div>

        </div>

    </div>
  )
}

export default Footer
