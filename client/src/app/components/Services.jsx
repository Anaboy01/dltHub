"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Lottie from "lottie-react";
import { useMediaQuery } from "react-responsive";

import dlt from "../../../public/dlt-color.png";
import softwareDesign from "../jsonData/Software Development.json";
import mobileDev from "../jsonData/Mobile Development.json";
import blockchainDev from "../jsonData/Blockchain.json";
import webDev from "../jsonData/Web Development.json";
import contentWrite from "../jsonData/Content Writing.json";
import spining from "../../../public/spinnigbg.png";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: ((index % 3) - 1) * 100,
    y: index < 3 ? -100 : 100,
    scale: 0.8,
    transition: { duration: 0.8, ease: "easeInOut" },
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const dltVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const serviceCards = [
  {
    animationData: softwareDesign,
    width: 271,
    height: 296.66,
    title: "Software Development",
    adjust: "left-[-30px]",
  },
  {
    animationData: blockchainDev,
    width: 349,
    height: 382.05,
    title: "Blockchain Development",
    adjust: "left-[-45px]",
  },
  {
    animationData: contentWrite,
    width: 271,
    height: 296.66,
    title: "Smart Contract Development",
    adjust: "left-[-30px]",
  },
  {
    animationData: mobileDev,
    width: 349,
    height: 382.05,
    title: "Mobile App Development",
    adjust: "left-[-45px]",
  },
  {
    animationData: webDev,
    width: 349,
    height: 382.05,
    title: "Website Development",
    adjust: "left-[-45px]",
  },
];

const Services = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  // Media queries
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });
  const isResponsive = isMobile || isTablet;

  // Exact dimensions as specified
  const cardContainerWidth = isMobile ? "278.762px" : isTablet ? "347.668px" : "auto";
  const cardContainerHeight = isMobile ? "305.16px" : isTablet ? "380.591px" : "auto";
  const cardTextSize = isMobile ? "26px" : isTablet ? "30px" : "35px";
  
  // Grid layout configuration
  const gridColumns = isMobile ? 1 : isTablet ? 2 : 3;
  const gridColumnGap = isMobile ? "0px" : isTablet ? "20px" : "300px";
  const gridRowGap = isMobile ? "60px" : isTablet ? "75px" : "125px";
  
  // Adjust text positioning
  const textMarginLeft = isMobile ? "37px" : isTablet ? "45px" : "0px";
  
  // Header text sizes - Updated as specified
  const headerWhatSize = "16px";
  const headerProjectsSize = isMobile ? "28px" : isTablet ? "40px" : "40px"; // Updated mobile to 28px
  
  // Section padding
  const sectionPadding = isMobile ? "40px 30px" : isTablet ? "50px 40px" : "62px 50px";
  const gridTopMargin = isMobile ? "50px" : isTablet ? "70px" : "70px";

  if (isResponsive) {
    return (
      <section
        ref={ref}
        className="font-poppins w-full min-h-screen pb-[50px] md:pb-[80px] lg:pb-[100px] scrollbar-hide overflow-x-hidden"
        style={{ padding: sectionPadding }}
      >
        <motion.div
          className="w-full flex flex-col items-center text-center gap-[25px]"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <p
            className="font-medium"
            style={{ fontSize: headerWhatSize, color: "#FEA650" }}
          >
            What we do
          </p>
          <p
            className="font-semibold capitalize"
            style={{ fontSize: headerProjectsSize, color: "#F7FCFE" }}
          >
            PROJECTS WE WORK ON
          </p>
        </motion.div>

        <div
          className="w-full"
          style={{
            marginTop: gridTopMargin,
            display: "grid",
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
            columnGap: gridColumnGap,
            rowGap: gridRowGap,
            justifyItems: "center",
          }}
        >
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="flex flex-col items-start justify-center"
              style={{
                width: cardContainerWidth,
                height: cardContainerHeight,
              }}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              custom={index}
            >
              <Lottie
                animationData={card.animationData}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
                className={card.adjust}
              />
              <p
                className="tracking-[2px] mt-2 text-left break-words"
                style={{
                  fontSize: cardTextSize,
                  color: "#F7FCFE",
                  width: "100%",
                  marginLeft: textMarginLeft,
                }}
              >
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  } else {
    // PC view: Use original layout and show the DLT animation block.
    return (
      <section
        ref={ref}
        className="font-poppins w-full flex flex-col pt-[62px] px-[50px] gap-[51px] min-h-screen pb-[100px] scrollbar-hide"
      >
        <motion.div
          className="w-full flex flex-col items-center text-center gap-[25px]"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <p className="text-[#FEA650] font-medium text-[16px]">
            What we do
          </p>
          <p className="text-[#F7FCFE] font-semibold text-[40px] capitalize">
            PROJECTS WE WORK ON
          </p>
        </motion.div>

        <div className="flex flex-col items-center w-full scrollbar-hide">
          <div className="w-full flex flex-col items-center gap-[125px] scrollbar-hide">
            <div className="flex relative items-center gap-[300px]">
              {serviceCards.slice(0, 3).map((card, index) => (
                <motion.div
                  key={card.title}
                  className="flex flex-col items-start"
                  style={{ width: `${card.width}px` }}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={card.animationData}
                    loop
                    autoplay
                    className={`relative ${card.adjust}`}
                  />
                  <p
                    className="font-medium tracking-[2px] break-words text-left"
                    style={{
                      fontSize: "35px",
                      color: "#F7FCFE",
                      width: "100%",
                    }}
                  >
                    {card.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex relative items-center gap-[300px] scrollbar-hide">
              <motion.div
                className="flex flex-col items-start"
                style={{ width: "349px" }}
                custom={3}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                transition={{ duration: 0.3 }}
              >
                <Lottie
                  animationData={mobileDev}
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                  className="relative left-[-45px]"
                />
                <p
                  className="font-medium tracking-[2px] break-words text-left"
                  style={{ fontSize: "35px", color: "#F7FCFE", width: "100%" }}
                >
                  Mobile App Development
                </p>
              </motion.div>

              {/* DLT animation block is shown only on PC */}
              <motion.div
                className="relative flex items-center justify-center scrollbar-hide"
                initial="hidden"
                animate={controls}
                variants={dltVariants}
              >
                <div className="absolute w-[1324.21px] h-[1324.21px] flex items-center justify-center">
                  <img
                    src={spining.src || "/placeholder.svg"}
                    alt="Spinning Background"
                    className="animate-spin object-contain [animation-duration:10s] w-full h-full"
                  />
                </div>

                <div className="absolute w-[500px] h-[500px] bg-custom-radial opacity-50 blur-2xl rounded-full -z-10" />

                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img src={dlt.src || "/placeholder.svg"} alt="DLT logo" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col items-start"
                style={{ width: "349px" }}
                custom={4}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                transition={{ duration: 0.3 }}
              >
                <Lottie
                  animationData={webDev}
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                  className="relative left-[-45px]"
                />
                <p
                  className="font-medium tracking-[2px] break-words text-left"
                  style={{ fontSize: "37px", color: "#F7FCFE", width: "100%" }}
                >
                  Website Development
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Services;
