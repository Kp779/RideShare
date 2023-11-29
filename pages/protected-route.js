
import withAuth from '@/utils/withAuth';
import React from 'react';
import App1 from './homepage/app1';
function ProtectedRoute() {
  return (
    <React.StrictMode>
       <h1>harsh</h1>
       <App1 />
           </React.StrictMode>
  )
};

export default withAuth(ProtectedRoute);
