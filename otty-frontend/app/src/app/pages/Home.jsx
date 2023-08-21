import {useEffect, useState} from 'react';

import WideButton from "../components/Misc/Buttons/wideButton";

const Home = () => {
    const [pounceFooter, setPounceFooter] = useState(false)
    useEffect(() => {
        setTimeout(() => setPounceFooter(true), 500)
    }, [])

    return (
        <div className={`grid place-items-center bg-primary h-[100%] overflow-clip`}>
            <div className={`w-96 h-full items-center flex bg-black  bg-opacity-10 `}>
                <div className={`w-full rounded-lg p-5 m-5 space-y-3`}>
                    <h2 className={'text-dark-red text-4xl py-6'}>تدور دلوقتي؟</h2>
                    <WideButton link={`/map/lost`} text={`قطتي ضاعت`} bg={`bg-light-red`}/>
                    <WideButton link={`/map/found`} text={`لقيت قطه`} bg={`bg-light-green`}/>
                </div>
            </div>
            <div
                className={`fixed text-dark-red right-0 left-0 bottom-4 temporary-bounce animate-bounce transform-gpu ${pounceFooter ? "translate-y-0 mt-1  duration-1000" : "translate-y-full -mb-12 "} `}>
                powered by 3Mawy
            </div>
        </div>
    );
};
export default Home;
