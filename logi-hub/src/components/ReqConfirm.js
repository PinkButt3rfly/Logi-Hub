import React from 'react';

const ReqConfirm = () => {
  return (
      <>
    <div>
      <div className="container-fluid custom-container-confirm">
        <div className="progress-container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mt-3">Request Parcel Delivery</h1>
                    <div className="progresss d-flex justify-content-around mt-5"> 
                        <div className="progress-bar" style={{ background: '#0077B6' }}>1</div>
                        <div className="progress-bar" style={{ background: '#0077B6' }}>2</div>
                        <div className="progress-bar">3</div>
                    </div>
                    <div className="progress-line-container">
                        <div className="progress-line"></div>
                        <div className="progress-line"></div>
                    </div>
                    
                    <div className="d-flex justify-content-around mt-5">
                        <span className="step-title">Shipping</span><hr/>
                
                        <span className="step-title">Payment</span>
                        <hr/>
                        <span className="step-title">Confirmation</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div className="container custom-container-confirm">
            <div className="row my-5">
                <div className="col-md-4">
                    <div className="map-container">
                        <p>Pickup <img className="map2" src="../Assets/icons/pickup.svg"/></p>
                        <img className="map1" src="../Assets/icons/line.svg"/>
                        <p>D1 <img className="map3" src="../Assets/icons/d1.svg"/></p>
                    </div>
                </div>

 
                <div className="col-md-4">
                    <div className="methods">
                        <p className="main" style={{ fontsize: '12px' }}>Magic Land, No.1, Kukwaba Hills, Constitution Ave, Wuye, Abuja</p>
                        <p className="main" style={{ fontsize: '12px' }}>Jabi Lake Mall, Bala Sokoto Way, Jabi 900108, Abuja</p>
                    
                        <h3 className="h3" style={{ fontsize: '14px', color: '#020231' }}>Gokada</h3>
                        <p  className="p"style={{ fontsize: '10px', color: '#02023199' }}>35km . 20min <span>N1700</span></p>
                        <h4 className="h3" style={{fontsize: '14px', color: '#020231' }}>2min away from you</h4>
                        <hr className="hr"/>
                    </div> 
                </div>
            </div>


            <p className="p1">Payment Method<a href="#">Cash on Pickup</a></p>


            
            <a href="#" style={{ backgroundcolor: '#0077B6', color: '#ffff',  justifycontent: 'center' }} className="btn" id="myBtn">Proceed</a>


            <div id="myModal" className="modal">



            
                <div className="modal-content">
                <div className="modal-header">
                <span className="close">&times;</span>
                <h2>Cash Payment</h2>
                </div>
                <div className="modal-body">
                <p>Please pay to the dispatch at the pickup location</p>
                </div>
                <div className="modal-footer">
                <button className="btn" id="myBtn2" type="button">Ok</button>
                </div>
            </div>

    </div>




    <div id="myModal2" className="modal">   

        
        <div className="modal-content">
            <div className="modal-header">
            <span className="close">&times;</span>
            <h2>Order Confirmed</h2>
            </div>
            
            <div className="modal-footer">
            <button className="btn" id="myBtn2" type="button">Ok</button>
            </div>
        </div>


    </div>

    </div>
    </div>
    </>
  )
}

export default ReqConfirm
