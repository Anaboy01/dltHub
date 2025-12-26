"use client";

import { useMediaQuery } from "react-responsive";

const Nav = () => {
 
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

  // Default (PC) styles
  let headerPaddingX = "50px";
  let headerPaddingY = "30px";
  let headerHeight = "95px";
  let imageWidth = "135.07px";
  let imageHeight = "33px";

  if (isTablet) {
    headerPaddingX = "25px"; 
   
  } else if (isMobile) {
    headerPaddingX = "25px"; 
    headerPaddingY = "22px"; 
    headerHeight = "64px";   
    imageWidth = "74.93px";  
    imageHeight = "18.307px";
  }

  return (
    <header
      className="flex items-center fixed justify-start w-full border-b-[1px] border-[#EFFFE2] z-10 custom-gradient"
      style={{ padding: `${headerPaddingY} ${headerPaddingX}`, height: headerHeight }}
    >
      <img
        src="/DLTHUB WHITE 1.png"
        alt="DLTHUB Logo"
        width={imageWidth}
        height={imageHeight}
      />
    </header>
  );
};

export default Nav;
