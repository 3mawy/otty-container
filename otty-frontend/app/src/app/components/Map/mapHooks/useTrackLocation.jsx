import { useState, useEffect } from "react";

const useTrackLocation = () => {
    const [position, setPosition] = useState(null);
    const [trackLocation, setTrackLocation] = useState(false);
    const [error, setError] = useState(null);
    const onChange = ({coords}) => {
        setPosition({
            lat: coords.latitude,
            lng: coords.longitude,
        });
    };
    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }, []);

    useEffect(() => {
        console.log(trackLocation)
        if (trackLocation){
            if(navigator.geolocation){

                const options = {timeout: 60000};
                const geoLoc = navigator.geolocation;
                const watchID = geoLoc.watchPosition(onChange, onError, options);
                return () => geoLoc.clearWatch(watchID);
            } else {
                alert("Sorry, browser does not support geolocation!");
            }
        }
    }, [trackLocation, position])
    return {position, setTrackLocation}
}
export default useTrackLocation;