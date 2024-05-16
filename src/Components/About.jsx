import React from 'react';

export default function About() {
    return(
        <>
            <div key="about" className="flex space-x-4 justify-center items-center">
                <img className='w-80' src="../src/assets/images/about01.png" alt="About company image" />
                <div className=" pt-12 pb-40">
                    <h1 className="text-3xl ">We Help To Get The Best Job And Find A Talent</h1>
                    <p className="p-2"> Get the best match with an employee and land your dream job.</p>
                </div>
                
            </div>
        </>
    )
}