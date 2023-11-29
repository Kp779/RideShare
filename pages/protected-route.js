
import withAuth from '@/utils/withAuth';
import React from 'react';
function ProtectedRoute() {
  return (
    <React.StrictMode>
      <h1>CREATED BY HARSH</h1>
    </React.StrictMode>
  )
};

export default withAuth(ProtectedRoute);
