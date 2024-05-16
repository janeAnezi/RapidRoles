import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";



export default function Navbar  () {
    return (
        <>
            <div className=" bg-inherit border border-sky-500  text-white rounded-lg">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold text-sky-950">RapidRoles</h1>
                    <div >
                        <ul className="flex space-x-6">
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Home</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">About</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Jobs</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Services</li>
                            <li className="hover:bg-sky-500 py-1 px-2 rounded-lg cursor-pointer">Blog</li>
                            <li className="bg-sky-500 hover:bg-sky-600 py-1 px-2 rounded-lg font-bold cursor-pointer">Post Jobs</li>
                        </ul>
                    </div>
                    <div><div><FaSearch /> </div></div>
                    <div className="flex space-x-4"> 
                        <div><FaRegBell /> </div> 
                        <div><IoPerson />  </div>
                    </div>
                </div>
            </div>
        </>
    )
}
