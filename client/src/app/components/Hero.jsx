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
  useInView(ref, { once: false, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const router = useRouter()

  const isTablet = useMediaQuery({ query: "(max-width: 1024px) and (min-width: 768px)" })
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })

  /* =======================
     RESPONSIVE VALUES
  ======================= */
  const dltHubFontSize = isMobile ? "30px" : isTablet ? "36px" : "64px"
  const ideasFontSize = isMobile ? "26px" : isTablet ? "36px" : "64px"
  const pFontSize = isMobile ? "14px" : "18px"

  const sectionPaddingTop = isMobile ? "120px" : isTablet ? "105px" : "0px"

  const sparkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0.8, 1],
      scale: [0.8, 1.1, 0.9, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      style={{ scale, paddingTop: sectionPaddingTop }}
      className="font-poppins w-full flex flex-col items-center relative overflow-hidden"
    >
      {/* =======================
          DESKTOP / TABLET ILLUSTRATIONS
      ======================= */}
      {!isMobile && (
        <div
          className="flex items-center justify-between w-full relative"
          style={{ top: "-150px" }}
        >
          <Lottie animationData={heroAnimationLeft} style={{ width: "900px" }} />
          <Lottie animationData={heroAnimationRight} style={{ width: "900px" }} />
        </div>
      )}

      {/* =======================
          HERO CONTENT
      ======================= */}
      <div
        className={`flex flex-col items-center gap-[24px] text-center w-full ${
          isMobile ? "relative mt-6" : "absolute"
        }`}
        style={!isMobile ? { top: "500px" } : {}}
      >
        <motion.div
          className="flex flex-col items-center gap-[14px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative py-[20px] md:py-[50px]">
            {!isMobile && (
              <>
                {/* TOP SPARK */}
                <motion.div
                  className="absolute top-[6px] left-[40%]"
                  initial="hidden"
                  animate="visible"
                  variants={sparkVariants}
                >
                  <img
                    src={fireCrackSpark.src}
                    alt="spark"
                    className="w-[70px] h-[70px]"
                  />
                </motion.div>

                {/* BOTTOM SPARK */}
                <motion.div
                  className="absolute bottom-[6px] right-[40%]"
                  initial="hidden"
                  animate="visible"
                  variants={sparkVariants}
                >
                  <img
                    src={fireCrackSpark.src}
                    alt="spark"
                    className="w-[70px] h-[70px] rotate-180"
                  />
                </motion.div>
              </>
            )}

            <motion.h1
              className="font-semibold"
              style={{ fontSize: dltHubFontSize, color: "#FC7C13" }}
            >
              DLT HUB
            </motion.h1>
          </div>

          <motion.p
            className="font-medium max-w-[620px]"
            style={{ fontSize: pFontSize, color: "#F7FCFE" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A full-service digital agency focused on creativity and result-driven solutions.
          </motion.p>
        </motion.div>

        <motion.h1
          className="font-semibold"
          style={{ fontSize: ideasFontSize, color: "#F7FCFE" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          Bringing Ideas to Life
        </motion.h1>

        <motion.button
          className="bg-[#FC7C13] px-[46px] py-[18px] rounded-[10px] font-medium text-[16px] text-[#F7FCFE]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/quote")}
        >
          Grow with us
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Hero
