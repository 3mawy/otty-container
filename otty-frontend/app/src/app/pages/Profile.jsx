import UserInfo from "../components/Profile/UserInfo";
import {FaEdit} from "react-icons/fa";
import pet from "../../images/pet.jpg";
import pet2 from "../../images/pet2.jpg";
import UserPets from "../components/Profile/UserPets";
import {logOut, setCredentials} from "../../features/auth/authSlice";
import {useDispatch} from "react-redux";

const Profile = () => {
    const user = {
        name: 'John Doe',
        age: 25,
        location: 'New York',
        bio: 'A passionate developer',
        ownedPets: [{name: 'John ', image: pet}, {name: ' Doe', image: pet2}]
    };
    const dispatch = useDispatch()
    const data = [{name: 'John Doe',}, {name: 'John Doe',}, {name: 'John Doe',}]
    return (
        <div className={`grid grid-cols-12  profile bg-main-orange min-h-full 2xl:container mx-auto`}>
            <div className="bg-gray-100 min-h-full col-span-12 lg:col-span-6 xl:col-span-5 p-8 grid space-y-0">
                <button onClick={() => dispatch(logOut())}>logout</button>
                <UserInfo user={user}/>
                <UserPets user={user}/>
            </div>
            <div className="bg-gray-200 min-h-full col-span-12 lg:col-span-6 xl:col-span-7 p-8 grid space-y-0">
                <div className={" bg-main-orange rounded-md grid w-full py-8 relative mx-auto shadow-md"}>
                    <h2 className={"pb-5 text-2xl"}> Your Posts</h2>
                </div>

            </div>
        </div>
    );
};
export default Profile;
