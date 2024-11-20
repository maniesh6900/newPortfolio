import Hat from "../../componets/models/had"
import RenderModel from "../../componets/randerModel"
import bg from "../../assets/background/about-background.png"
import AboutContant from "./aboutContant"

const About = () => {
  return (<>
        <img src={bg} alt="about-background-image" 
        className="w-full -z-50 h-screen object-cover fixed object-center"
        />
        <div className="w-full h-3/4 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <RenderModel>
                <Hat />
            </RenderModel>
        </div>
   
        <div className="relative w-full h-screen flex flex-col itmes-center justify-center">
          <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2 ">
            <h1 className="font-bold text-accent sm:text-8xl lg:text-9xl ">
              Maniesh
              </h1>
            <p className="font-light text-foreground text-lg">
              Meet The Wizard Behind This Portfolio
            </p>
          </div>
        </div>
    <AboutContant />
  </>)
}

export default About