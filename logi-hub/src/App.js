import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuthLoader } from './context/AuthContext';


// Reusable Components

//const root = ReactDOM.createRoot(document.getElementById(root));
//root.render(
  //<HashRouter>
  
//Routes Pages
//import ProtectedRoute from './components/ProtectedRoute';

import Home from './components/pages';
import { SplitScreen } from './components/pages/SplitScreen';
import { UserLogin } from './components/pages/Login';
import { UserDashboard } from './components/pages/Dashboard';
import { ReqDelivery } from './components/pages/RequestDelivery';
import { ReqConfirm } from './components/pages/Confirmation';
import { PaymentDev } from './components/pages/Payment';


/*const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/splitscreen', element: <SplitScreen /> },
  { path: '/login', element: <UserLogin /> },
  { path: '/dashboard', element: <UserDashboard /> },
  { path: '/requestdelivery', element: <ReqDelivery /> },
  { path: '/payment', element: <PaymentDev /> },
  { path: '/Confirmation', element: <ReqConfirm /> },

]);*/


function App() {
  return (
   
   // <RouterProvider router={router} />

     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} loader={checkAuthLoader} />
        <Route path="/requestdelivery" element={<ReqDelivery />} />
        <Route path="/payment" element={<PaymentDev />} />
        <Route path="/confirmation" element={<ReqConfirm />} />
      </Routes>
   </Router> 

  );
}

export default App;
