import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentToken} from "../../features/auth/authSlice";

export const RegistrationRoute = ({ children }) => {

    const user  = useSelector(selectCurrentToken)
    if (user) {
        // user is authenticated
        return <Navigate to="/" />;
    }
    return children;
};