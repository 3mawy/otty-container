import {OverlayView, OverlayViewF} from "@react-google-maps/api";

import {Link} from "react-router-dom";
import CatLocation from "../img/CatLocation";
import CatLocationRed from "../img/CatLocationRed";

export default function CustomMarker({position, currentLocation, data}) {
    // const dispatch = useDispatch();
    function onClick() {
        // dispatch(setCurrentPost(data?.id))
    }

    return (
        <OverlayViewF
            position={position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
            <Link to={`${(data?.id) ? (`/map/info/${data.id}`) : ('#')}`}>
                <button
                    onClick={onClick}
                    type='button'
                >
                    <div className={'w-16 -mt-16 -ml-8'}>
                        {currentLocation ? (<CatLocation/>) : (<CatLocationRed/>)}

                    </div>
                </button>
            </Link>
        </OverlayViewF>
    )
}