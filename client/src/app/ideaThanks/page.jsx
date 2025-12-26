"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useMediaQuery } from "react-responsive"
import spinning from "../../../public/spinnigbg.png"

const Page = () => {
  const router = useRouter()

  // Media queries
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" })

  // Responsive values
  const headingFontSize = isMobile ? "28px" : isTablet ? "36px" : "48px"
  const headingWidth = isMobile ? "90%" : isTablet ? "80%" : "680px"
  const spinningSize = isMobile ? "800px" : isTablet ? "1200px" : "1500.21px"
  const paddingTop = isMobile ? "30px" : isTablet ? "40px" : "50px"
  const backgroundSize = isMobile ? "300px" : isTablet ? "600px" : "1000px"
  const backgroundHeight = isMobile ? "400px" : isTablet ? "800px" : "1200px"

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 10000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="font-poppins justify-center h-[100vh] flex items-center relative" style={{ paddingTop }}>
      <div className="absolute inset-0 -z-10">
        <div
          className="fixed right-[-20%] bottom-[-40%] custom-radial opacity-40 blur-3xl rounded-[50%]"
          style={{
            width: backgroundSize,
            height: backgroundHeight,
          }}
        ></div>
      </div>

      <div
        className="absolute flex items-center justify-center"
        style={{
          width: spinningSize,
          height: spinningSize,
        }}
      >
        <img
          src={spinning.src || "/placeholder.svg"}
          alt="Spinning Background"
          className="animate-spin object-contain [animation-duration:10s] w-full h-full"
        />
      </div>

      <h1
        className="font-poppins font-semibold text-center relative z-10 text-[#F7FCFE] px-4"
        style={{
          fontSize: headingFontSize,
          maxWidth: headingWidth,
        }}
      >
        You have successfully submitted your Idea
      </h1>
    </main>
  )
};

export default Page;
