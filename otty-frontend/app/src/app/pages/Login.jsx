import logo from "../../images/logo.svg"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../provider/authProvider";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../features/auth/authSlice";
import {useGetCatPostByIdQuery} from "../../features/posts/catPostsApiSlice";
import {useLoginMutation} from "../../features/auth/authApiSlice";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [login, {data,isSuccess, isLoading, isError, error }] = useLoginMutation();


    useEffect(() => {
        if (isSuccess) {
            dispatch(setCredentials({ userEmail: data.user.email, userName: data.user.name, id: data.user.id, token: data.access_token }));
            navigate("/");
        }
        if (isError) {
            console.log(error);
        }
    }, [isSuccess, isError, data, dispatch, navigate, error]);

    const loginUser = (e) => {
        e.preventDefault();
        login({ email, password });
    };
    return (
        <div className="h-screen flex align-middle content-center items-center justify-center">
            <div
                className="flex flex-col bg-white mx-auto w-1/4 min-w-[350px] h-auto p-6 border-b rounded-xl text-center shadow-md">
                <img src={logo} alt="logo" className="w-32 h-32 self-center"/>
                <span className="font-bold text-3xl mb-4">Otty Login</span>
                <form onSubmit={(e) => loginUser(e)} className="mb-4" autoComplete="on">
                    <input type="email" placeholder="Email" className="mb-4 border-0 border-b-2 p-3 w-full" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="mb-4 border-0 border-b-2 p-3 w-full"/>
                    <button type={"submit"}
                            className="bg-dark-red hover:bg-dark-red-200 p-3 w-full rounded-md text-white font-bold mb-4">Login
                    </button>
                </form>

                <span className=" text-xs">Don't have an account?<a href="register"> click here</a></span>
            </div>
        </div>
    );
};
export default Profile;
