"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { HiMenuAlt3 } from "react-icons/hi"
import { motion } from "framer-motion"
import { RiHome6Line } from "react-icons/ri"
import { HiCog } from "react-icons/hi"
import { PiFolderFill } from "react-icons/pi"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Calculate animation values based on screen size
  const getAnimationValues = () => {
    if (windowWidth < 640) {
      // Small Mobile
      return { x: isOpen ? -200 : -80 }
    } else if (windowWidth < 768) {
      // Mobile
      return { x: isOpen ? -260 : -100 }
    } else if (windowWidth < 1024) {
      // Tablet
      return { x: isOpen ? -380 : -150 }
    } else {
      // Desktop (default)
      return { x: isOpen ? -500 : -200 }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <div
      ref={sidebarRef}
      className="fixed z-10 rounded-full
        /* Mobile (small) - default */
        h-sidebar-small w-sidebar-small right-[-340px] top-[40px]
        /* Mobile */
        sm:h-sidebar-mobile sm:w-sidebar-mobile sm:right-[-420px] sm:top-[-15px]
        /* Tablet */
        md:h-sidebar-tablet md:w-sidebar-tablet md:right-[-600px] md:top-[-20px]
        /* Desktop */
        lg:h-sidebar-desktop lg:w-sidebar-desktop lg:right-[-800px] lg:top-[-30px]"
    >
      <motion.div
        className={`w-full h-full bg-[#000000] rounded-full shadow-lg flex items-center justify-start 
          /* Mobile (small) - default */
          pl-[25px]
          /* Mobile */
          sm:pl-[30px]
          /* Tablet */
          md:pl-[40px]
          /* Desktop */
          lg:pl-[50px]
          transition-all duration-500 ${isOpen ? "border-none" : "border-[1px]"}`}
      >
        {isOpen && <div className="absolute inset-0 rounded-full bg-[#000000] blur-lg"></div>}

        <div className="relative z-10 flex items-center">
          <HiMenuAlt3
            className="cursor-pointer text-buttonOrange
              /* Mobile (small) - default */
              text-[30px]
              /* Mobile */
              sm:text-[35px]
              /* Tablet */
              md:text-[40px]
              /* Desktop */
              lg:text-[50px]"
            onClick={() => setIsOpen(!isOpen)}
          />

          <motion.div
            initial={{ x: -200, scale: 0, opacity: 0 }}
            animate={{
              ...getAnimationValues(),
              scale: isOpen ? 1 : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="absolute rounded-full bg-[#000000] shadow-lg flex items-center justify-center relative
              /* Mobile (small) - default */
              w-menu-small h-menu-small left-[-50px]
              /* Mobile */
              sm:w-menu-mobile sm:h-menu-mobile sm:left-[-60px]
              /* Tablet */
              md:w-menu-tablet md:h-menu-tablet md:left-[-70px]
              /* Desktop */
              lg:w-menu-desktop lg:h-menu-desktop lg:left-[-80px]"
          >
            <div className="absolute inset-0 rounded-full bg-[#000000] blur-lg"></div>

            <nav
              className="relative z-10 w-full h-full rounded-full flex items-center justify-start
              /* Mobile (small) - default */
              px-[20px] gap-[30px]
              /* Mobile */
              sm:px-[25px] sm:gap-[40px]
              /* Tablet */
              md:px-[30px] md:gap-[80px]
              /* Desktop */
              lg:px-[37px] lg:gap-[112px]"
            >
              <HiMenuAlt3
                className="cursor-pointer text-buttonOrange
                  /* Mobile (small) - default */
                  text-[30px]
                  /* Mobile */
                  sm:text-[35px]
                  /* Tablet */
                  md:text-[40px]
                  /* Desktop */
                  lg:text-[50px]"
                onClick={() => setIsOpen(!isOpen)}
              />

              <div
                className="font-bold font-poppins text-buttonOrange flex flex-col
                /* Mobile (small) - default */
                w-[150px] text-[16px] gap-[30px]
                /* Mobile */
                sm:w-[180px] sm:text-[18px] sm:gap-[40px]
                /* Tablet */
                md:w-[250px] md:text-[20px] md:gap-[60px]
                /* Desktop */
                lg:w-[302px] lg:text-[22px] lg:gap-[75px]"
              >
                <Link href="/" passHref>
                  <div className="w-full flex items-center justify-between cursor-pointer">
                    <p>Home</p>
                    <RiHome6Line
                      className="
                      /* Mobile (small) - default */
                      text-[16px]
                      /* Mobile */
                      sm:text-[18px]
                      /* Tablet */
                      md:text-[20px]
                      /* Desktop */
                      lg:text-[22px]"
                    />
                  </div>
                </Link>
                <Link href="/#services" passHref>
                  <div className="w-full flex items-center justify-between cursor-pointer">
                    <p>Services</p>
                    <HiCog
                      className="
                      /* Mobile (small) - default */
                      text-[16px]
                      /* Mobile */
                      sm:text-[18px]
                      /* Tablet */
                      md:text-[20px]
                      /* Desktop */
                      lg:text-[22px]"
                    />
                  </div>
                </Link>
                <Link href="/portfolio" passHref>
                  <div className="w-full flex items-center justify-between cursor-pointer">
                    <p>Portfolio</p>
                    <PiFolderFill
                      className="
                      /* Mobile (small) - default */
                      text-[16px]
                      /* Mobile */
                      sm:text-[18px]
                      /* Tablet */
                      md:text-[20px]
                      /* Desktop */
                      lg:text-[22px]"
                    />
                  </div>
                </Link>
              </div>
            </nav>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar

