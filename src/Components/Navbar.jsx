
export default function Navbar  () {
    return (
        <>
            <div className=" bg-green-900 text-white rounded-lg">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold">RapidRoles</h1>
                    <div >
                        <ul className="flex space-x-6">
                            <li>Home</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Post Jobs</li>
                        </ul>
                    </div>
                    <div>
                        <i>bellicon  </i>
                        <i>personicon</i>
                    </div>
                </div>
            </div>
        </>
    )
}
