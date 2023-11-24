import withAuth from '@/utils/withAuth';
import dashboard from './dashboard/App';
function ProtectedRoute() {
  return <h1>This is a protected route.</h1>;
}

export default withAuth(ProtectedRoute);
