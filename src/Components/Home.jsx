import Navbar from "./Navbar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Home () {
    return(
        <>
            <div className="bg-hero bg-center bg-cover bg-no-repeat p-8">
                <Navbar />
                <h1>welcome to rappid roles</h1>
            </div>
            
        </>
    )
}