import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const PaymentDev = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [additionalData, setAdditionalData] = useState('');
    const formData = location.state || {};

    const handleAdditionalChange = (e) => {
        setAdditionalData(e.target.value);
      };
    

    const handleProceed = (e) => {
        e.preventDefault();
        const updatedData = { ...formData, additionalData };
        navigate('/confirmation', { state: updatedData });
        

    };

  return (
      <>
    <div>
        <div className="container-fluid-md custom-container-payment">
            <div className="progress-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center mt-3">Request Parcel Delivery</h1>
                        <div className="progresss d-flex justify-content-around mt-5"> 
                            <div className="progress-bar" style={{ backgroundColor: '#0077B6' }}>1</div>
                            <div className="progress-bar">2</div>
                            <div className="progress-bar" style={{ backgroundColor: '#0077B6' }}>3</div>
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

        <div className="container custom-container-payment">
            <div className="row my-5">
                <div className="col-md-4">
                    <div className="map-container">
                        <p>Pickup <img className="map2" src="../Assets/icons/pickup.svg"/></p>
                        <img className="map1" src="../Assets/icons/line.svg"/>
                        <p>D1 <img className="map3" src="../Assets/icons/d1.svg"/></p>
                    </div>
                </div>


                <div class="col-md-4">
                    <div className="methods">
                        <p className="main" style={{ fontSize: '12px' }}> { formData.address } </p>
                        <p className="main" style={{ fontSize: '12px' }}> { formData.pua } </p>
                    
                        <h3 className="h3" style={{ fontSize: '14px', color: '#020231' }}>Gokada</h3>
                        <p className="p"   style={{ fontSize: '10px', color: '#02023199' }}>35km . 20min <span>N1700</span></p>
                        <h4 className="h3" style={{ fontSize: '14px', color: '#020231' }}>2min away from you</h4>
                        <hr className="hr"/> 

                        <h3 className="h3" style={{ fontSize: '14px', color: '#020231' }}>Kwiky</h3>
                        <p className="p"   style={{ fontSize: '10px', color: '#02023199' }}>25km . 20min <span>N2500</span></p>
                        <h4 className="h3" style={{ fontSize: '14px', color: '#020231' }}>30secs away from you</h4>
                        <hr className="hr"></hr>
                    </div>
                </div>

                <div className="col-md-4">
                    <form>
                    <input type="hidden" value="Cash on Delivery" name="paymentm" onChange={handleAdditionalChange} />
                    </form>
            <div className="form-container">
                <h2 style={{fontSize: '16px'}}>Payment Method</h2>
                <hr/>
                <a className="payment" href="#"><img className="img" src="../Assets/icons/card.svg"/> Card Payment</a>
                <a className="payment" href="#"><img  className="img" src="../Assets/icons/bank.svg"/> Bank Transfer</a>
                <a className="payment" href="#"><img  className="img" src="../Assets/icons/cash.svg"/> Cash Payment</a>
            </div>
                
                    <a href="#" onClick={handleProceed} style={{backgroundColor: '#0077B6', color: '#ffff',  justifyContent: 'center'}} className="btn">Proceed</a>
                
                
            </div>
        </div>
    </div>

</div>

           
</>
  )
}

export default PaymentDev
