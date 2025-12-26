"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const inputAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
};

const GetAQuoteForm = ({ initialData, updateData, onContinue }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  
  const effectiveHeadingFontSize = isMobile ? "32px" : isTablet ? "48px" : "64px";
  const effectiveFormWidth = isMobile ? "w-full" : isTablet ? "w-[80%]" : "w-[50%]";
  const sectionPaddingX = isMobile ? "10px" : "0px";
  const headerTextAlign = isMobile ? "text-left" : "text-center";

  return (
    <section
      className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[95px] w-full items-center justify-center pt-[60px] md:pt-[100px] lg:pt-[149px] pb-[40px] md:pb-[60px] lg:pb-[74px]"
      style={{ paddingLeft: sectionPaddingX, paddingRight: sectionPaddingX }}
    >
      <div className={`flex flex-col ${headerTextAlign} items-${isMobile ? "start" : "center"} gap-[10px] md:gap-[15px] w-full`}>
        <h1
          className="text-[#FC7C13] font-semibold"
          style={{ fontSize: effectiveHeadingFontSize }}
        >
          Get a Quote
        </h1>
        <p className="text-[#F7FCFE] font-medium text-[16px] md:text-[18px]">
          Provide the project details
        </p>
      </div>

      <form
        className={`flex flex-col items-center gap-[20px] md:gap-[25px] ${effectiveFormWidth}`}
        onSubmit={(e) => {
          e.preventDefault();
          onContinue();
        }}
      >
        {/* Tags Input */}
        <div className={`flex flex-col gap-[10px] md:gap-[20px] justify-start items-stretch ${effectiveFormWidth}`}>
          <label
            htmlFor="tags"
            className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[18px] md:text-[20px] lg:text-[22px] tracking-[2px]"
          >
            Add tags
          </label>
          <input
            placeholder="e.g. Defi, Refi ..."
            id="tags"
            type="text"
            value={initialData.tags}
            onChange={(e) => updateData({ tags: e.target.value })}
            className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px] w-full"
          />
        </div>

        {/* Project Documents Input */}
        <div className={`flex flex-col gap-[10px] md:gap-[20px] justify-start items-stretch ${effectiveFormWidth}`}>
          <label
            htmlFor="docs"
            className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[18px] md:text-[20px] lg:text-[22px] tracking-[2px]"
          >
            Attach project document
          </label>
          <AnimatePresence>
            {initialData.docs.map((doc, index) => (
              <motion.div key={index} {...inputAnimation} className="relative w-full">
                <input
                  placeholder="Add link to external documents, photos, sites, videos, and presentation"
                  type="text"
                  value={doc}
                  onChange={(e) => {
                    const newDocs = [...initialData.docs];
                    newDocs[index] = e.target.value;
                    updateData({ docs: newDocs });
                  }}
                  className={`font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] ${initialData.docs.length > 1 ? "pl-[45px]" : ""} pr-[45px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px] w-full`}
                />
                {initialData.docs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newDocs = initialData.docs.filter((_, i) => i !== index);
                      updateData({ docs: newDocs });
                    }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <IoMdClose className="text-red-500 text-[24px]" />
                  </button>
                )}
                {index === initialData.docs.length - 1 && (
                  <button
                    type="button"
                    onClick={() => updateData({ docs: [...initialData.docs, ""] })}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <IoMdAdd className="text-[#FC7C13] text-[24px]" />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Description Input */}
        <div className={`flex flex-col gap-[10px] md:gap-[20px] justify-start items-stretch ${effectiveFormWidth}`}>
          <label
            htmlFor="description"
            className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[18px] md:text-[20px] lg:text-[22px] tracking-[2px]"
          >
            Description
          </label>
          <textarea
            placeholder="Write your project details..."
            id="description"
            value={initialData.description}
            onChange={(e) => updateData({ description: e.target.value })}
            className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[141px] border-[#464646] border-[1px] w-full"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className={`bg-buttonOrange ${effectiveFormWidth} text-[#fff] text-[16px] font-medium p-[10px] rounded-[10px] mt-[10px]`}
        >
          Continue
        </button>
      </form>
    </section>
  );
};

export default GetAQuoteForm;
