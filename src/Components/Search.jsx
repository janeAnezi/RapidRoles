export default function Search() {
    return(
        <>
            <div className="flex justify-center items-center p-6 bg-gradient-to-b from-slate-500 to-slate-800">
                <form className="space-x-6">
                    <input className="px-2 py-1" type="text" name="search" placeholder="Keyword..."/>
                    <input className="px-2 py-1" type="text" name="search" placeholder="Category"/>
                    <input className="px-2 py-1" type="text" name="search" placeholder="location"/>
                    <button className="px-6 py-1.5 border text-stone-300 text-sm font-bold hover:bg-slate-600  cursor-pointer" type="submit">Search</button>
                </form>
            </div>
        </>
    )
}