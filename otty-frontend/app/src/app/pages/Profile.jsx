import UserInfo from "../components/Profile/UserInfo";
import {FaEdit} from "react-icons/fa";
import pet from "../../images/pet.jpg";
import pet2 from "../../images/pet2.jpg";

const Profile = () => {
    const user = {
        name: 'John Doe',
        age: 25,
        location: 'New York',
        bio: 'A passionate developer',
        ownedPets: [{name: 'John ', image: pet},{name: ' Doe', image: pet2}]
    };
    const data = [{name: 'John Doe',}, {name: 'John Doe',}, {name: 'John Doe',}]
    return (
        <div className={`grid grid-cols-12 profile bg-orange-400 min-h-full 2xl:container mx-auto`}>
            <div className="bg-gray-100 min-h-full col-span-12 lg:col-span-6 xl:col-span-5 p-8 grid space-y-0">
                <div className={" h-[31rem] w-[28rem] bg-orange-300 rounded-lg grid relative mt-1 place-content-center mx-auto"}>
                    <UserInfo user={user}/>
                </div>
                {user.ownedPets.length>0 && <div className={" bg-orange-300 rounded-md grid w-[28rem] py-8 relative mx-auto"}>
                    <h2 className={"pb-5 text-2xl"}> Your Pets List</h2>

                    {user.ownedPets.map((pet) => (
                        <div className="h-24 bg-orange-200 my-2 items-center flex justify-between px-5">
                            <div className="flex items-center space-x-4">

                                <img src={pet.image} alt={''} className="bg-orange-600 w-20 h-20 rounded-full object-cover " />
                                <p className="text-2xl pt-1">{pet.name}</p>
                            </div>
                            <FaEdit className={'text-2xl hover:animate-pulse cursor-pointer'} onClick={console.log("aaa")}/>

                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
};
export default Profile;
