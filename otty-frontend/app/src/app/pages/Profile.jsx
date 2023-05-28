import UserInfo from "../components/Profile/UserInfo";
import {FaEdit} from "react-icons/fa";
import pet from "../../images/pet.jpg";
import pet2 from "../../images/pet2.jpg";
import UserPets from "../components/Profile/UserPets";

const Profile = () => {
    const user = {
        name: 'John Doe',
        age: 25,
        location: 'New York',
        bio: 'A passionate developer',
        ownedPets: [{name: 'John ', image: pet}, {name: ' Doe', image: pet2}]
    };
    const data = [{name: 'John Doe',}, {name: 'John Doe',}, {name: 'John Doe',}]
    return (
        <div className={`grid grid-cols-12  profile bg-orange-400 min-h-full 2xl:container mx-auto`}>
            <div className="bg-gray-100 min-h-full col-span-12 lg:col-span-6 xl:col-span-5 p-8 grid space-y-0">
                <UserInfo user={user}/>
                <UserPets user={user}/>
            </div>
            <div className="bg-gray-200 min-h-full col-span-12 lg:col-span-6 xl:col-span-7 p-8 grid space-y-0">
                <div className={" bg-orange-300 rounded-md grid w-full py-8 relative mx-auto shadow-md"}>
                    <h2 className={"pb-5 text-2xl"}> Your Posts</h2>
                </div>

                </div>
        </div>
    );
};
export default Profile;
