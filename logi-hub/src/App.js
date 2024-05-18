import React, {useState} from 'react'

// Reusable Components

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

//Routes Pages

import Home from './components/pages';
import { SplitScreen } from './components/pages/SplitScreen';
import { UserLogin } from './components/pages/Login';
import { UserDashboard } from './components/pages/Dashboard';
import { ReqDelivery } from './components/pages/RequestDelivery';
import { ReqConfirm } from './components/pages/Confirmation';
import { PaymentDev } from './components/pages/Payment';




function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splitscreen" element={<SplitScreen />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/requestdelivery" element={<ReqDelivery />} />
        <Route path="/payment" element={<PaymentDev />} />
        <Route path="/confirmation" element={<ReqConfirm />} />
      </Routes>
    </Router>
  );
}

export default App;
