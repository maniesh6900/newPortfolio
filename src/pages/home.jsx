import bg from "../assets/background/home-background.png"
import RenderModel from "../componets/randerModel"
import Navigation from "../componets/Navigation/index"
import Wizard from "../componets/models/Wizard"


function App() {
  return (
    <>
     <main className="flex min-h-screen flex-col items-center justify-between relative   ">
      <img 
        src={bg} 
        sizes="100vw"
        alt="background-image"  
        className="w-full -z-50 h-screen object-cover fixed object-center "
      />
        <div className="w-screen h-screen ">
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
      </div>
    </main>
    </>
  )
}

export default App
