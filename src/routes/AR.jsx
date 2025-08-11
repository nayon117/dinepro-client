import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AR = ({children}) => {
  const {user,loading} = useAuth();
  const [isAdmin,isPending] = useAdmin();
  const location = useLocation();

  if(loading || isPending) return <progress className="progress w-56" />
  if(user && isAdmin) return children;
  return <Navigate to="/login" state={{from:location}} replace />
}
export default AR;
