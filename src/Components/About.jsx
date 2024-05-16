import React from 'react';

export default function About() {
    return(
        <>
            <div className="flex w-full justify-center items-center bg-sky-950 py-20 px-10 text-slate-200">
                <div className='mr-10 mt-14'><img className='rounded-lg w-96' src="../src/assets/images/bgaboutprsn.png" alt="About company image" /></div>
                <div className='w-[50%]'>
                    <div className='mb-14'>
                        <h1 className="text-3xl font-semibold mb-4 ">CONNECTING OPPORTUNITIES</h1>
                        <i className='pt-3 font-semibold'>We Help To Get The Best Job And Find A Talent.</i>
                    </div>
                    <p className="leading-loose mb-2">
                        In the dynamic landscape of the modern workforce, finding the perfect job fit can
                        be a daunting task. Whether you're seeking a role as a salesperson, a nurturing nanny, a reliable house help, 
                        or an inspiring tutor. Get the best match with an employee and land your dream job.
                    </p>
                    <button className='bg-sky-400 rounded mt-10 p-2 absolute right-24 '>Read More</button>
                </div>
                
            </div>
        </>
    )
}