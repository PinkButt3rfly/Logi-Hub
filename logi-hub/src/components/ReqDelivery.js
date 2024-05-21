import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReqDelivery = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        category: '',
        rename: '',
        phn: '',
        pua: '',
        time: ''
      });
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate('/payment', { state: formData });
        console.log(formData);
      };
    
  return (
    <div>
      <div className="container-fluid-md custom-container-req-1">
    <div className="progress-container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center mt-3">Request Parcel Delivery</h1>
                <div className="progresss d-flex justify-content-around mt-5"> 
                    <div className="progress-bar">1</div>
                    <div className="progress-bar" style={{backgroundColor: '#0077B6'}}>2</div>
                    <div class="progress-bar" style={{backgroundColor: '#0077B6'}}>3</div>
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


<div className="container-md custom-container-req-2">
    <div className="row my-5">
        <div className="col-md-6">
            <div className="row custom-row1">
                <div className="col-md-12">
                    <div className="form-container1">
                        <h3 className="form-title">Pickup Details</h3>
                        <hr/>
                        <form className="form1" action="/">

                            <div className="mb-3 mt-3">
                                <label className="customer" for="name">Customer Name:</label>
                                <input  type="text" class="form-control" id="name" name="name" value={formData.name}  onChange={handleChange} required/>
                            </div>

                            <div className="mb-3">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email"  name="email" value={formData.email}  onChange={handleChange} required/>
                            </div>

                                <div className="mb-3">
                                    <label for="pickupPhoneNumber" className="form-label">Pickup Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+234</span>
                                            <input className="phone form-control" type="tel" id="pickupPhoneNumber" name='phone' value={formData.phone}  onChange={handleChange} placeholder="Enter Phone Number"/>
                                        </div>
                                    </div>

                                <div className="mb-3">
                                    <label for="pickupAddress" className="form-label">Pickup Address*</label>
                                    <input type="text" class="form-control" id="pickupAddress" name='address' value={formData.address}  onChange={handleChange} placeholder="Enter Pickup Address"/>
                                </div>

                                <div class="mb-3">
                                    <label for="category" className="form-label">Category</label>
                                    <select className="form-select" id="category" name='category' value={formData.category} onChange={handleChange}>
                                        <option className="cart" selected>Select Category</option>
                                        <option value="documents">Documents</option>
                                        <option value="parcel">Parcel</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="row custom-row2">
                <div className="col-md-12">
                    <div className="form-container-2">
                        <h3 className="form-title">Delivery Point 1</h3>
                        <hr/>
                        <form className="form1" action="/">
                            <div class="form1">

                                <div className="mb-3 mt-3">
                                    <label className="email" for="email">Recipient Name:</label>
                                    <input type="text" className="form-control" id="email" placeholder="Enter name" name="rename" value={formData.rename}  onChange={handleChange} required/>
                                </div>

                                <div className="mb-3">
                                    <label className="phn" for="phn">Pickup Phone number:</label>
                                    <input type="phn" class="form-control" id="phn"  name="phn" value={formData.phn}  onChange={handleChange} required/>
                                </div>
                                            
                                <div className="mb-3">
                                    <label class="add" for="add">Pickup Address:</label>
                                    <input type="add" className="form-control" id="phn"  name="pua" value={formData.pua}  onChange={handleChange} required/>
                                </div>
                    
                                <a href="#">+ <span>Add another delivery point</span></a>

                                <div className="mb-3">
                                    <label className="time" for="time">Pickup Time:</label>
                                    <input type="time" className="form-control" id="time" placeholder="Now" name="time"  value={formData.time} onChange={handleChange} required/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
</div> 


        <div className="container custom-container-req-3 my-5">
            <a href="#" onClick={handleSubmit} className="btn">Proceed</a>
        </div>
</div>
    </div>
  )
}

export default ReqDelivery
