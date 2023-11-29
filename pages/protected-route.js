import { reactStrictMode } from '@/next.config';
import withAuth from '@/utils/withAuth';
import React from 'react';
import Dashboard from './Dashboard';
function ProtectedRoute() {
  return (
    <React.StrictMode>
       {/* <Dashboard/> */}
       <h1>harsh</h1>
           </React.StrictMode>
  )
};

export default withAuth(ProtectedRoute);
