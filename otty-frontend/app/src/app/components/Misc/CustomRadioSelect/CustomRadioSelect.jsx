import React, {useEffect, useState} from 'react';

const CustomRadioSelect = ({selected, handleChange}) => {

    return (
        <div
            className="grid grid-cols-2 space-x-2 rounded-xl bg-light-orange p-2 mb-5"
        >
            <div>
                <input type="radio" name="option" value="cat" id="1" className="peer hidden"
                       checked={selected === 'cat'} onChange={handleChange}/>
                <label
                    htmlFor="1"
                    className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-main-orange peer-checked:font-bold peer-checked:text-white"
                >قطه</label
                >
            </div>

            <div>
                <input type="radio" name="option" value="dog" id="2" className="peer hidden"
                       checked={selected === 'dog'} onChange={handleChange}/>
                <label
                    htmlFor="2"
                    className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-main-orange peer-checked:font-bold peer-checked:text-white"
                >كلب</label
                >
            </div>


        </div>
    );
};

export default CustomRadioSelect;
