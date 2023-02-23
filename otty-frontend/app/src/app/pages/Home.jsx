import {useEffect, useState} from 'react';

import WideButton from "../components/Misc/Buttons/wideButton";

const Home = () => {
    const [pounceFooter, setPounceFooter] = useState(false)
    useEffect(() => {
        setTimeout(() => setPounceFooter(true), 500)
    }, [])

    return (
        <div className={`grid place-items-center bg-orange-500 h-[100%]`}>
            <div className={`w-96 h-full items-center flex bg-black  bg-opacity-10 `}>
                <div className={`w-full rounded-lg p-5 m-5 space-y-3`}>
                    <h2 className={'text-lime-50 text-4xl py-6'}>تدور دلوقتي؟</h2>
                    <WideButton link={`/map/lost`} text={`قطتي ضاعت`} bg={`bg-red-700`}/>
                    <WideButton link={`/map/found`} text={`لقيت قطه`} bg={`bg-green-700`}/>
                </div>
            </div>
            <div
                className={`fixed right-0 left-0 bottom-4 transform  temporary-bounce animate-bounce transform-gpu ${pounceFooter ? "translate-y-0 mt-1  duration-1000" : "translate-y-full -mb-12 "} `}>
                powered by chameleon
            </div>
        </div>
    );
};
export default Home;
