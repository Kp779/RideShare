import Dashboard from '@/dashboard/App';
import withAuth from '@/utils/withAuth';
function ProtectedRoute() {
  return (
    <Dashboard/>
  )
};

export default withAuth(ProtectedRoute);
