import ImgMediaCard from "./Card"

export default function Opportunities() {
    return (
      <>
        <div className="py-20 bg-gradient-to-b from-sky-100 to-sky-400">
          <h1 className="text-center text-3xl font-bold bg-gradient-to-b from-sky-400 to-sky-950 text-transparent bg-clip-text">OPPORTUNITIES</h1>
          <div className="flex space-x-6 justify-center mt-20"> 
            <ImgMediaCard image="../src/assets/images/about03.jpeg" title="SALES PERSON" text="With diverse range of job opportunities to cater to a multitude of talents and interests. 
              Whether you're a seasoned sales professional looking for your next challenge."/> 
            <ImgMediaCard image="../src/assets/images/about04.jpeg" title="TUTOR" text="Connect with employers, schedule interviews, and receive real-time updates on your application status. Clarify job requirements, and demonstrate your enthusiasm for the role." /> 
            <ImgMediaCard image="../src/assets/images/about05.jpeg" title="NANNY" text="We thoroughly vet all job listings to ensure they meet our stringent quality standards, providing you with peace of mind as you explore new opportunities" /> 
          </div>
        </div>
      </>
    )
}

