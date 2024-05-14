import Navbar from "./Navbar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Home () {
    return(
        <>
            <div className="bg-hero bg-center bg-cover bg-no-repeat p-8">
                <div className="text-center">
                    <Navbar />
                    <div className="mt-40 mb-20">
                        <h1 className="text-4xl font-bold text-slate-200"> FIND THE PERFECT JOB</h1>
                        <p className="text-slate-200 p-4">Your dream job is just one click away</p>

                        <div className="mt-20">
                            <button className="bg-sky-500 font-bold mr-6 text-slate-200 py-2 px-4 text-sm">SEARCH JOB</button>
                            <button className="bg-sky-500 font-bold text-slate-200 py-2 px-4 text-sm">FIND TALENT</button>
                        </div>
                    </div>
                </div>
               
                
            </div>
            
        </>
    )
}