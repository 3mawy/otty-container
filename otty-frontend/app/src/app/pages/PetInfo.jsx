import {useNavigate, useParams} from "react-router-dom";

import {useGetCatPostByIdQuery} from "../../features/posts/catPostsApiSlice";
import Loading from "./Loading";

import ImageGallery from "../components/Misc/ImageGallery";
import {useDispatch, useSelector} from "react-redux";
import {selectTrackPost, setTrackPost} from "../../features/posts/catPostsSlice";

const PetInfo = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCatPostByIdQuery(id);

    let content
const dispatch = useDispatch();
    const trackLocationtest = useSelector(selectTrackPost)

    function trackLocation() {
        navigate('/map/lost')
        dispatch(setTrackPost({post:{lat:data.post.lat, lng:data.post.lng, }}))
        console.log(trackLocationtest)

    }
    function sharePost() {

    }
console.log()
    if (isLoading) {
        content = <Loading/>
    } else if (isSuccess) {
        content =
            <>
                {data && <div className={`h-[100%] absolute right-0 flex top-0 w-screen `}>
                    <div className={`p-5 z-50 mx-auto my-auto w-[22rem] bg-orange-100 rounded-lg`}>
                        <p>{data.post.lat}</p>
                        <p>{data.post.lng}</p>
                        <ImageGallery images={data?.images}/>
                        <p className={`rounded-lg h-52 bg-orange-200 mt-5 mb-4 max-w-80 w-full p-2  mx-auto appearance-none focus-visible:outline-0`}
                           placeholder={`Extra Info`}>{data?.post?.notes}</p>
                        <div className="flex justify-center text-xl space-x-2 ">
                            <button onClick={trackLocation}
                                    className={`bg-green-500 text-white p-2.5 rounded-md w-screen`}>
                                تتبع
                            </button>
                            <button onClick={sharePost}
                                    className={`bg-blue-500 text-white p-2.5 rounded-md w-screen`}>
                                !شارك
                            </button>
                        </div>

                    </div>
                    <div className={`z-40 absolute top-0 w-full h-full bg-black bg-opacity-50`}
                         onClick={() => navigate(-1)}/>

                </div>
                }
            </>
    } else if (isError) {
        content = <div className={'h-[94vh]'}></div>
    }

    return (content);
};

export default PetInfo;


