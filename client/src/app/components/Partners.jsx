"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import cartesi from "../../../public/Cartesi Lockup Black 1.png"
import kotani from "../../../public/Kotani-white 1.png"
import lisk from "../../../public/LISK 1.png"
import celo from "../../../public/celo white 1.png"
import canza from "../../../public/download (13) 3.png"
import bitmama from "../../../public/bitmama 1.png"

const partners = [
  { image: cartesi, name: "Cartesi" },
  { image: kotani, name: "Kotani" },
  { image: lisk, name: "Lisk" },
  { image: celo, name: "Celo" },
  { image: canza, name: "Canza" },
  { image: bitmama, name: "Bitmama" },
]

const Partners = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {
    margin: "-100px 0px",
    once: false,
  })

  // Media queries for JavaScript logic
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" })

  // Animation speed based on screen size
  const scrollSpeed = isMobile ? "15s" : isTablet ? "18s" : "20s"

  return (
    <motion.div
      ref={containerRef}
      className="pt-[30px] sm:pt-[40px] md:pt-[52px] pb-[40px] sm:pb-[50px] md:pb-[64px] flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px] overflow-hidden relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="fixed left-[-20%] bottom-[-2%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] custom-radial blur-[50px] sm:blur-[75px] md:blur-[100px] z-[-1] rounded-[50%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.2 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="flex flex-col items-center w-full gap-[15px] sm:gap-[20px] md:gap-[25px]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="font-medium font-poppins text-[14px] sm:text-[15px] md:text-[16px] text-[#FEA650]"
          whileHover={{ scale: 1.05 }}
        >
          Our partners
        </motion.p>
        <motion.h1
          className="capitalize font-semibold text-center text-[28px] sm:text-[32px] md:text-[40px] text-[#F7FCFE]"
          whileHover={{ textShadow: "0 0 8px rgba(247, 252, 254, 0.3)" }}
        >
          MEET OUR COLLABORATORS
        </motion.h1>
      </motion.div>

      <div className="w-full overflow-hidden relative mt-[20px] sm:mt-[25px] md:mt-[35px]">
        <div className="flex w-max animate-infinite-scroll whitespace-nowrap gap-[0.5rem] sm:gap-[0.75rem] md:gap-[1rem]">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-[150px] sm:w-[180px] md:w-[200px] h-[80px] sm:h-[90px] md:h-[100px] mx-[0.5rem] sm:mx-[0.75rem] md:mx-[1rem]"
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {partner.name === "Canza" || partner.name === "Kotani" ? (
                <img
                  src={partner.image.src || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-auto h-[90px] sm:h-[100px] md:h-[120px]"
                />
              ) : (
                <img
                  src={partner.image.src || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-auto h-[40px] sm:h-[45px] md:h-[50px]"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          animation: scroll ${scrollSpeed} linear infinite;
        }
      `}</style>
    </motion.div>
  )
}

export default Partners

