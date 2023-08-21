import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTrackPost} from "../../features/posts/catPostsSlice";
import {selectCurrentToken} from "../../features/auth/authSlice";

export const ProtectedRoute = ({ children }) => {

    const user  = useSelector(selectCurrentToken)
    if (!user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};