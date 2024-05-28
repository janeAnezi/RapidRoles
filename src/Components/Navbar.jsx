import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
// import { IoPerson } from "react-icons/io5";
import Person from "./Person"


export default function Navbar  () {
    return (
        <>
            <div className=" bg-inherit border border-sky-500 shadow-lg shadow-sky-700/50 text-white rounded-lg">
                <div className="flex justify-between py-2 px-4">
                    <h1 className="text-2xl font-bold text-sky-950">RapidRoles</h1>
                    <div >
                        <ul className="flex space-x-6">
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Home</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">About</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Jobs</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Services</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Blog</li>
                            <li className="bg-sky-500 hover:bg-sky-600 mt-1 py-0.5 px-2 rounded-lg font-bold cursor-pointer">Post Jobs</li>
                        </ul>
                    </div>
                    <div className="mt-2 mb-2 flex border rounded-lg"><FaSearch className="mt-1 ml-2"/><input className="rounded-lg bg-inherit px-1 ml-3 border-none outline-0 w-24 placeholder:text-start placeholder:text-sm" type="search" name="search" id="search" placeholder="search job"  /> </div>
                    <div className="flex space-x-10"> 
                        <div className="mt-2"><FaRegBell /> </div> 
                        <div><Person />  </div>
                    </div>
                </div>
            </div>
        </>
    )
}
