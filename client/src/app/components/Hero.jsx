"use client"

import fireCrackSpark from "../../../public/sparks.png"
import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Lottie from "lottie-react"
import heroAnimationLeft from "../jsonData/Left side.json"
import heroAnimationRight from "../jsonData/Right side.json"
import { useRouter } from "next/navigation"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const sparkVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: [0, 1, 0.8, 1],
      scale: [0.8, 1.1, 0.9, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const router = useRouter()

  // Media queries for responsiveness
  const isTablet = useMediaQuery({ query: "(max-width: 1024px) and (min-width: 768px)" })
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })

  // Adjusted sizes based on viewport
  const illustrationWidth = isMobile ? "400px" : isTablet ? "600px" : "900px"
  const illustrationGap = isMobile ? "10px" : isTablet ? "15px" : "25px"
  const dltHubFontSize = isMobile ? "24px" : isTablet ? "36px" : "64px"
  const pFontSize = isMobile ? "14px" : "18px"
  const ideasFontSize = isMobile ? "24px" : isTablet ? "36px" : "64px"

  // For tablet and mobile, add padding at the top of the section.
  // For mobile, add 50px more padding (155px total)
  const sectionPaddingTop = isMobile ? "155px" : isTablet ? "105px" : "0px"

  // Adjust spark positions and sizes
  const sparkTopStyle = {
    top: isTablet ? "15px" : "6px",
    left: isTablet ? "35%" : "40%",
    width: isTablet ? "70px" : "auto",
    height: isTablet ? "70px" : "auto",
  }

  const sparkBottomStyle = {
    bottom: isTablet ? "15px" : "6px",
    right: isTablet ? "35%" : "40%",
    width: isTablet ? "70px" : "auto",
    height: isTablet ? "70px" : "auto",
  }

  // For mobile: position text slightly below the Lottie animations
  const heroTextTop = isMobile ? "150px" : isTablet ? "300px" : "500px"
  const heroTextMarginBottom = "70px"

  const heroTextGap = isMobile ? "gap-[25px]" : "gap-[25px]"

  // For mobile, we want the section to take full viewport height.
  const sectionHeight = isMobile ? "100vh" : "auto"

  // Adjust illustration position for mobile to create more space for text below
  const illustrationTop = isMobile ? "-180px" : "-150px"

  return (
    <motion.section
      ref={ref}
      style={{ scale, paddingTop: sectionPaddingTop, height: sectionHeight }}
      className="font-poppins w-full flex flex-col items-center relative"
    >
      <div
        className="flex items-center justify-between w-full relative"
        style={{ gap: illustrationGap, top: illustrationTop }}
      >
        <Lottie animationData={heroAnimationLeft} style={{ width: illustrationWidth }} />
        <Lottie animationData={heroAnimationRight} style={{ width: illustrationWidth }} />
      </div>

      <div
        className={`heroText absolute flex flex-col items-center ${heroTextGap} w-full`}
        style={{ top: heroTextTop, marginBottom: heroTextMarginBottom }}
      >
        <motion.div
          className="w-full flex flex-col items-center gap-[15px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full py-[25px] md:py-[50px]">
            {/* Only display sparks when NOT in mobile view */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute"
                  style={sparkTopStyle}
                  initial="hidden"
                  animate="visible"
                  variants={sparkVariants}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={fireCrackSpark.src || "/placeholder.svg"}
                      alt="Top Spark"
                      className="filter brightness-110 w-full h-full"
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute"
                  style={sparkBottomStyle}
                  initial="hidden"
                  animate="visible"
                  variants={sparkVariants}
                >
                  <motion.div
                    animate={{ rotate: [180, 175, 185, 180] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={fireCrackSpark.src || "/placeholder.svg"}
                      alt="Bottom Spark"
                      className="filter brightness-110 w-full h-full"
                    />
                  </motion.div>
                </motion.div>
              </>
            )}
            <motion.h1
              className="font-semibold text-center relative"
              style={{ fontSize: dltHubFontSize, color: "#FC7C13" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{
                textShadow: "0 0 15px rgba(252, 124, 19, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              DLT HUB
            </motion.h1>
          </div>

          <motion.p
            className="font-medium text-center"
            style={{ fontSize: pFontSize, color: "#F7FCFE" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A full-service digital agency focused on creativity and result-driven solutions.
          </motion.p>
        </motion.div>

        <motion.h1
          className="font-semibold text-center"
          style={{ fontSize: ideasFontSize, color: "#F7FCFE" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{
            textShadow: "0 0 15px rgba(247, 252, 254, 0.3)",
          }}
        >
          Bringing Ideas to Life
        </motion.h1>

        <motion.button
          className="relative overflow-hidden bg-[#FC7C13] px-[46.5px] py-[18px] rounded-[10px] font-medium text-[16px] text-[#F7FCFE] text-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/quote")}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(45deg, #FC7C13, #FF9800, #FFC107, #FC7C13)",
              backgroundSize: "300% 300%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <span className="relative z-10">Grow with us</span>
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              boxShadow: [
                "0 0 20px rgba(252, 124, 19, 0.2)",
                "0 0 30px rgba(252, 124, 19, 0.3)",
                "0 0 20px rgba(252, 124, 19, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Hero
