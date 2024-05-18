import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const UserDashboard = () => {
  return (
      <>
<div>
    <Navbar />
    <div class="container-md custom-container-dash">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-tops" src="../Assets/images/card1.png" alt="Card image"/>
                    <div className="card-body">
                        <h2 className="card-title">Parcel Delivery</h2>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus nisl, velit amet, phasellus. 
                            Malesuada congue massa mauris in ut nunc faucibus fermentum, fames. Cursus adipiscing adipiscing semper aliquet proin quisque. Quis massa maecenas mauris tellus. 
                        </p>

                        <p className="card-text">
                            Tellus ac feugiat nisl curabitur placerat. Quam ac non, sed et. Bibendum laoreet aliquam habitant dui commodo, rhoncus, risus. 
                            Metus eu vestibulum scelerisque dignissim sem vulputate lorem fames in. Donec nunc at eget a massa. 
                        </p>
                        <a href="#" className="btn">Request Parcel Delivery</a>
                    </div>
                </div>
            </div>


            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top" src="../Assets/images/card2.png" alt="Card image"/>
                    <div className="card-body">
                        <h2 className="card-title">Truck Delivery</h2>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus nisl, velit amet, phasellus. 
                            Malesuada congue massa mauris in ut nunc faucibus fermentum, fames. Cursus adipiscing adipiscing semper aliquet proin quisque. Quis massa maecenas mauris tellus. 
                        </p>

                        <p className="card-text">
                            Tellus ac feugiat nisl curabitur placerat. Quam ac non, sed et. Bibendum laoreet aliquam habitant dui commodo, rhoncus, risus. 
                            Metus eu vestibulum scelerisque dignissim sem vulputate lorem fames in. Donec nunc at eget a massa. 
                        </p>
                        <a href="#" className="btn">Request Parcel Delivery</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


   


    <div className="container-md custom-container-dash2">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top" src="../Assets/images/card3.png" alt="Card image"/>
                    <div className="card-body">
                        <h2 className="card-title">Office/Home Relocation</h2>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus nisl, velit amet, phasellus. 
                            Malesuada congue massa mauris in ut nunc faucibus fermentum, fames. Cursus adipiscing adipiscing semper aliquet proin quisque. Quis massa maecenas mauris tellus. 
                        </p>

                        <p className="card-text">
                            Tellus ac feugiat nisl curabitur placerat. Quam ac non, sed et. Bibendum laoreet aliquam habitant dui commodo, rhoncus, risus. 
                            Metus eu vestibulum scelerisque dignissim sem vulputate lorem fames in. Donec nunc at eget a massa. 
                        </p>
                        <a href="#" className="btn">Request Parcel Delivery</a>
                    </div>
                </div>
            </div>


            <div className="col-md-6">
                <div className="card custom-card">
                    <img className="card-img-top" src="../Assets/images/card4.png" alt="Card image"/>
                    <div className="card-body">
                        <h2 className="card-title">International Delivery</h2>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus nisl, velit amet, phasellus. 
                            Malesuada congue massa mauris in ut nunc faucibus fermentum, fames. Cursus adipiscing adipiscing semper aliquet proin quisque. Quis massa maecenas mauris tellus. 
                        </p>

                        <p className="card-text">
                            Tellus ac feugiat nisl curabitur placerat. Quam ac non, sed et. Bibendum laoreet aliquam habitant dui commodo, rhoncus, risus. 
                            Metus eu vestibulum scelerisque dignissim sem vulputate lorem fames in. Donec nunc at eget a massa. 
                        </p>
                        <a href="#" className="btn">Request Parcel Delivery</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer />
</>



  )
}

export default UserDashboard
