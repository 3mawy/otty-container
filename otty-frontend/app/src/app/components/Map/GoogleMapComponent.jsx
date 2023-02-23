import {
    useJsApiLoader,
    GoogleMap,
    Autocomplete,
    DirectionsRenderer,
    MarkerF, MarkerClustererF, MarkerClusterer
} from '@react-google-maps/api'
import {useEffect, useRef, useState} from 'react'
import cat from "../Map/img/position-gps-svgrepo-coml.svg";

import CustomMarker from "./CustomMarker/CustomMarker";
import useTrackLocation from "./mapHooks/useTrackLocation";
import Loading from "../../pages/Loading";
import {useSelector} from "react-redux";
import {selectTrackPost} from "../../../features/posts/catPostsSlice";

const center = {lat: 43.8584, lng: 2.2945}

function GoogleMapComponent({posts}) {
    const [libraries] = useState(['places']);
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDGz12dpgeauMRsnE7amI6rP3QgrLqhmrM',
        libraries: libraries,
    })
    const [map, setMap] = useState(null)
    // const google = window.google;
    const {position, setTrackLocation} = useTrackLocation()
    const trackLocation = useSelector(selectTrackPost)
    useEffect(() => {
        if (position) {
            map?.panTo(position)
        }
    }, [map, position])
console.log(posts)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const destiantionRef = useRef()
    useEffect(() => {
        if (trackLocation.length !== 0)
        calculateRoute()

    }, [trackLocation])
    if (!isLoaded) {
        return <Loading/>
    }

    async function calculateRoute() {
        setTrackLocation(false)
        // eslint-disable-next-line no-undef
        var directionsService = new google.maps.DirectionsService()
        console.log(trackLocation)
        const results = await directionsService.route({
            destination: {lat: trackLocation.lat, lng: trackLocation.lng},
            // eslint-disable-next-line no-undef
            origin: position,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.WALKING,
        })
        console.log(results)
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        // eslint-disable-next-line no-undef
        setDirectionsResponse(null)
        setTrackLocation(false)
        setDistance('')
        setDuration('')
        destiantionRef.current.value = ''
        console.log(directionsResponse)
    }

    console.log(position)
    return (
        <div>

            <div className={'absolute left-0 top-0 w-full h-full '}>
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    options={{
                        zoomControl: true,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => {
                        setMap(map)
                    }}

                >
                    {position !== null && <CustomMarker position={position} currentLocation/>}
                    {
                        posts && <MarkerClusterer>
                            {
                                (clusterer) => (
                                    posts.map((post) => (
                                            <CustomMarker key={post.id} position={{lat: post.lat, lng: post.lng}}
                                                          data={post} clusterer={clusterer}/>

                                        )
                                    )
                                )
                            }
                        </MarkerClusterer>}
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} options={{
                            suppressMarkers: true
                            ,
                            polylineOptions: {
                                strokeWeight: 5,
                                strokeOpacity: 0.5,
                                strokeColor: '#fd7b35',
                            },
                        }}/>
                    )}
                </GoogleMap>
            </div>
            <div
                className={' bg-orange-500 absolute'}
            >
                <div>

                    <div>
                        <Autocomplete>
                            <input
                                type='text'
                                placeholder='Destination'
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </div>

                    <div>
                        <button type='submit' onClick={calculateRoute}>
                            Calculate Route
                        </button>
                        <button
                            aria-label='center back'
                            onClick={clearRoute}
                        >clear
                        </button>
                    </div>
                </div>
                <div>
                    <p>Distance: {distance} </p>
                    <p>Duration: {duration} </p>
                    <button
                        aria-label='center back'
                        onClick={() => {
                            map.panTo(position)
                            setTrackLocation(true)
                            map.setZoom(15)
                        }}
                    >aaaa
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GoogleMapComponent