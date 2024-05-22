import React from 'react'


const Main = () => {
  return (
    //<div></div>
    <div>
        <div className="container-md custom-container2 my-5">
            <div className="row gx-5">
                <div className="col-md-6">
                    <h1>We cover Everything<br/>Logistics</h1>
                </div>

                <div className="col-md-3">
                    <img className="open-box" src="../Assets/icons/open-box.png" alt="open box"/>
                    <h3>Parcel delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr/>

                    <img class="open-box" src="../Assets/icons/delivery.png" alt="open box"/>
                    <h3>Office/Home Relocation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="#">
                        <a href="/requestdelivery" class="btn">Request Delivery Now</a>
                    </div>

                </div>

                <div class="col-md-3">
                    <img class="open-box" src="../Assets/icons/delivery-truck.png" alt="open box"/>
                    <h3>Truck Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr/>

                    <img class="open-box" src="../Assets/icons/plane.png" alt="open box"/>
                    <h3>International Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>



        <div className="container-md custom-container3 my-5">
            <div className="row">
                <div className="col-md-4">
                    <img className="open-box" src="../Assets/icons/explorer.png" alt="open box"/>
                    <h2>Explore Various Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    
            
                    <img className="open-box" src="../Assets/icons/tracking.png" alt="open box"/>
                    <h2>Full Tracking</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
        
                <div className="col-md-4">
                    <img className="open-box" src="../Assets/icons/best-price.png" alt="open box"/>
                    <h2>Get the Best Prices</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    
        
                    <img className="open-box" src="../Assets/icons/box (2).png" alt="open box"/>
                    <h2>Safe Packaging</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
        
                <div className="col-md-4">
                    <img class="open-box" src="../Assets/icons/delivery-bike.png" alt="open box"/>
                    <h2>Fast Delivery Sevices</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    
            
                    <img className="open-box" src="../Assets/icons/customer-service.png" alt="open box"/>
                    <h2>Customer Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            
        </div>


        <div className="container-md custom-container4">
            <div className="row">
                <div className="col-md-8">
                    <h1>Are you a small logistics company?</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et arcu aliquet porta dignissim est. 
                        Egestas malesuada laoreet tristique ut quis suspendisse. 
                    </p>

                    <p>Aliquet id sed felis fermentum sed. Ultrices dictum turpis massa accumsan mollis. 
                        Condimentum lectus quis vestibulum ante. 
                    </p>

                    <div className="#">
                        <a href="/splitscreen" className="btn">Become a Vendor</a>
                    </div>
                </div>
          
                <div className="col-md-4">
                    <img src="../Assets/images/bikeguy.jpeg" className="img-del img-fluid" alt="miumiu"/>
                </div>
            </div>
        </div>




        <div className="container-md custom-container5 my-5">
            <div className="about">
                <h1>What our clients say about us!</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et arcu aliquet porta dignissim est. 
                    Egestas malesuada laoreet tristique ut quis suspendisse. 
                </p>
            </div>

            <div className="row my-5">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top-main" src="../Assets/images/client1.jpeg" alt="Card image"/>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et arcu aliquet porta dignissim est. 
                                Egestas malesuada laoreet tristique ut quis suspendisse.
                            </p>
                            <h3 className="card-title">Mat Joe</h3>
                            <a href="#" className="btn">Client</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top-main" src="../Assets/images/client2.jpeg" alt="Card image"/>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et arcu aliquet porta dignissim est. 
                                Egestas malesuada laoreet tristique ut quis suspendisse.
                            </p>
                            <h3 className="card-title">Mat Joe</h3>
                            <a href="#" className="btn">Client</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card custom-card1">
                        <img className="card-img-top-main" src="../Assets/images/client3.jpeg" alt="Card image"/>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et arcu aliquet porta dignissim est. 
                                Egestas malesuada laoreet tristique ut quis suspendisse.
                            </p>
                            <h3 className="card-title">Mat Joe</h3>
                            <a href="#" className="btn">Client</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      

       
        
    </div>
  )
}

export default Main
