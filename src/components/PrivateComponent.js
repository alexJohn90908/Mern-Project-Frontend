import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateComponent() {
    // auth yeh check krega agr signup page par kuch localstorage me user key se data hai
const auth = localStorage.getItem('user');
  return auth ?<Outlet />:<Navigate to='/signup'/>
  
}

export default PrivateComponent;
