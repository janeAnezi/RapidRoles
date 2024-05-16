import ImgMediaCard from "./Card"

export default function Opportunities() {
    return (
      <>
        <div className="py-20 bg-sky-100">
          <h1 className="text-center text-3xl font-bold bg-gradient-to-b from-sky-400 to-sky-950 text-transparent bg-clip-text">OPPORTUNITIES</h1>
          <div className="flex space-x-6 justify-center mt-20"> <ImgMediaCard /> <ImgMediaCard /> <ImgMediaCard /> </div>
        </div>
      </>
    )
}

