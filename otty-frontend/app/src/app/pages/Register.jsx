import logo from "../../images/logo.svg"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../features/auth/authSlice";
import {useEffect, useState} from "react";
import {useLoginMutation, useRegisterMutation} from "../../features/auth/authApiSlice";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate();

    const [register, {data,isSuccess, isLoading, isError, error }] = useRegisterMutation();


    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        }
        if (isError) {
            console.log(error);
        }
    }, [isSuccess, isError, data, navigate, error]);

    const registerUser = (e) => {
        e.preventDefault();
        register({ email, name, password, passwordConfirmation });
    };
    return (
        <div className="h-screen flex align-middle content-center items-center justify-center">
            <div
                className="flex flex-col bg-white mx-auto w-1/4 min-w-[350px] h-auto p-6 border-b rounded-xl text-center shadow-md">
                <img src={logo} alt="logo" className="w-32 h-32 self-center"/>
                <span className="font-bold text-3xl mb-4">Otty Login</span>
                <form className="mb-4">
                    {isError && {error}}
                    <input type="text" placeholder="Email" className="mb-4 border-0 border-b-2 p-3 w-full" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Name" className="mb-4 border-0 border-b-2 p-3 w-full" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="mb-4 border-0 border-b-2 p-3 w-full"/>
                    <input type="text" placeholder="Password confirmation" value={passwordConfirmation}
                           onChange={(e) => setPasswordConfirmation(e.target.value)}
                           className="mb-4 border-0 border-b-2 p-3 w-full"/>
                    <button type={"submit"} onClick={registerUser}
                            className="bg-dark-red hover:bg-dark-red-200 p-3 rounded-md text-white font-bold mb-4 w-full">Login
                    </button>
                </form>

            </div>
        </div>
    );
};
export default Profile;
