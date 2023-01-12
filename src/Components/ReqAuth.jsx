import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";


const ReqAuth = ({children}) => {
    const isAuth = useSelector((store) => store.Authreducer.isAuth)
    const location = useLocation()
    
    if (!isAuth) {
        return <Navigate to="/login" replace state={{data:location.pathname}} />
    }

    return children;
};

export default ReqAuth;