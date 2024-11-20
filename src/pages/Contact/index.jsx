import React from 'react'
import bg from "../../assets/background/contact-background.png"
import Form from './Form'

const Contact = () => {
  return (<>
    
    <img src={bg} alt="about-background-image" 
        className="w-full -z-50 h-screen object-cover absolute object-center"
        />
        <div className="relative w-full h-screen flex flex-col itmes-center justify-center">
          <div className="absolute flex flex-col items-center text-center  sm:top-[30%] left-1/2  -translate-x-1/2 ">
            <h1 className="font-bold text-accent sm:text-8xl lg:text-9xl ">
              Summon The Wizard
              </h1>

          </div>
            <Form />
        </div>
  </>
  )
}

export default Contact