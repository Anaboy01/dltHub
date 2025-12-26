"use client"

import dlt from "../jsonData/logo.json"
import Lottie from "lottie-react"

const Loader = () => {
  return (
    <main className="font-poppins justify-center h-[80vh] flex items-center relative pt-[30px] md:pt-[40px] lg:pt-[50px]">
      <div className="absolute inset-0 -z-10">
        <div className="fixed right-[-20%] bottom-[-40%] w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[900px] lg:w-[1000px] lg:h-[1200px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
      </div>

      <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800.21px] lg:h-[800.21px] flex items-center justify-center">
        <Lottie
          animationData={dlt}
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
          className="relative left-[-15px] sm:left-[-25px] md:left-[-35px] lg:left-[-45px]"
        />
      </div>
    </main>
  )
}

export default Loader

