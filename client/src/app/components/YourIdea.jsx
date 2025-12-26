"use client"

import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useMediaQuery } from "react-responsive"
import illustration from "../../../public/travel _ travelling, airplane, aeroplane, plane, flight, choose, choice, man, people.png"

const YourIdea = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
  })
  const [formValidMessage, setFormValidMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formFieldVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const illustrationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const handleChange = (e) => {
    setFormValidMessage("")
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullName, email, reason } = formData

    if (!fullName || !email || !reason) {
      setFormValidMessage("Please fill in all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setFormValidMessage("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    axios
      .post("https://dev-studio-phi.vercel.app/api/v1/idea/suggestIdea", {
        fullName: formData.fullName,
        emailAddress: formData.email,
        why: formData.reason,
      })
      .then((response) => {
        setIsSubmitting(false)
        router.push("/ideaThanks")
      })
      .catch((error) => {
        setIsSubmitting(false)
        if (error.response && error.response.status === 400) {
          setFormValidMessage("Invalid input. Please check your details.")
        } else {
          setFormValidMessage("Server error. Please try again later.")
        }
      })
  }

  // Improved media queries with proper breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isMobileOrTablet = isMobile || isTablet

  // Define font sizes and widths
  const headingFontSize = isMobile ? "32px" : isTablet ? "36px" : "48px"
  const taglineFontSize = "16px"
  const labelFontSize = isMobile ? "18px" : "22px"

  // For mobile/tablet: form takes full width with proper padding
  const formContainerWidth = isMobileOrTablet ? "100%" : "471px"
  const formPadding = isMobile ? "15px" : isTablet ? "20px" : "0px"

  // Adjust container spacing
  const sectionPadding = isMobile ? "100px 15px 47px 15px" : isTablet ? "100px 30px 47px 30px" : "100px 0 47px 50px"

  return (
    <motion.section
      className={`flex items-center ${isMobileOrTablet ? "justify-center" : "justify-start gap-[400px]"} font-poppins relative overflow-hidden w-full`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ padding: sectionPadding }}
    >
      {/* Background blur circle */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
        animate={{
          background: [
            "radial-gradient(circle, rgba(254, 166, 80, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(254, 166, 80, 0.15) 10%, transparent 70%)",
            "radial-gradient(circle, rgba(254, 166, 80, 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Form container */}
      <motion.div
        className="flex flex-col justify-center gap-[20px] relative w-full md:w-[80%]"
        style={{ maxWidth: isMobileOrTablet ? "100%" : "600px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div className="flex flex-col items-start gap-[25px]  w-full " variants={formFieldVariants}>
          <motion.h1
            className="font-semibold text-[#F7FCFE] text-left"
            style={{
              fontSize: headingFontSize,
              maxWidth: isMobile ? "100%" : isTablet ? "100%" : "570px",
            }}
            whileHover={{ textShadow: "0 0 8px rgba(247, 252, 254, 0.3)" }}
          >
            Got ideas? We've got the skill. Let's team up!
          </motion.h1>

          <motion.p
            className="font-regular text-[#FEA650] text-left"
            style={{
              fontSize: taglineFontSize,
              maxWidth: isMobile ? "100%" : isTablet ? "350px" : "350px",
            }}
            variants={formFieldVariants}
          >
            Kindly fill out the form and our representative will get back to you.
          </motion.p>
        </motion.div>

        <div className="w-full flex items-start justify-left">
          <motion.form
            className="flex flex-col items-start gap-[20px]"
            onSubmit={handleSubmit}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            style={{
              width: isMobileOrTablet ? "100%" : formContainerWidth,
              padding: isMobileOrTablet ? formPadding : "0",
            }}
          >
            <div className="w-full flex flex-col items-start gap-[10px]">
              <div className="w-full flex flex-col items-start gap-[20px]">
                <label
                  htmlFor="fullName"
                  className="w-full text-left text-[#F7FCFE] cursor-pointer font-semibold tracking-[2px]"
                  style={{ fontSize: labelFontSize }}
                >
                  Full name
                </label>
                <motion.input
                  name="fullName"
                  id="fullName"
                  placeholder="enter your full name"
                  type="text"
                  className="w-full font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] cursor-pointer rounded-[10px] h-[55px] border-[#464646] border-[1px]"
                  whileFocus={{ scale: 1.02 }}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full flex flex-col items-start gap-[20px]">
                <label
                  htmlFor="email"
                  className="w-full text-left text-[#F7FCFE] cursor-pointer font-semibold tracking-[2px]"
                  style={{ fontSize: labelFontSize }}
                >
                  Email address
                </label>
                <motion.input
                  name="email"
                  id="email"
                  placeholder="enter your email address"
                  type="text"
                  className="w-full font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] cursor-pointer rounded-[10px] h-[55px] border-[#464646] border-[1px]"
                  whileFocus={{ scale: 1.02 }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full flex flex-col items-start gap-[20px]">
                <label
                  htmlFor="reason"
                  className="w-full text-left text-[#F7FCFE] cursor-pointer font-semibold tracking-[2px]"
                  style={{ fontSize: labelFontSize }}
                >
                  Why are you reaching out to us?
                </label>
                <motion.textarea
                  name="reason"
                  id="reason"
                  placeholder="message..."
                  className="w-full font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] cursor-pointer rounded-[10px] border-[#464646] border-[1px] min-h-[120px]"
                  whileFocus={{ scale: 1.02 }}
                  value={formData.reason}
                  onChange={handleChange}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className={`bg-buttonOrange rounded-[10px] text-white font-medium ${isMobileOrTablet ? "w-full" : "w-[196px]"}`}
              style={{
                height: isMobile ? "50px" : isTablet ? "55px" : "55px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={formFieldVariants}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
            {formValidMessage && <div className="text-red-600 mt-4">{formValidMessage}</div>}
          </motion.form>
        </div>
      </motion.div>

      {/* Illustration - only shown on desktop */}
      {isDesktop && (
        <motion.div
          className="flex items-center justify-start gap-[300px] pt-[100px] font-poppins"
          variants={illustrationVariants}
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img src={illustration.src || "/placeholder.svg"} width="600" height="600" alt="Illustration" />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  )
}

export default YourIdea

