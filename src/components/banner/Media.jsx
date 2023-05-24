import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs,SiElectron } from "react-icons/si";
const Media = () => {
  const handleSocila = (e)=>{
    if(e==="facebook"){
      window.location.href="https://web.facebook.com/joshua.dogubo"
    }else if(e==="tweeter"){
      window.location.href="https://twitter.com/g_facthor"
    }else if(e==="linkedIn"){
      window.location.href="https://www.linkedin.com/in/dogubo/"
    }

  }
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={()=>handleSocila('facebook')}>
              <FaFacebookF />
            </span>
            <span className="bannerIcon"  onClick={()=>handleSocila('tweeter')}>
              <FaTwitter />
            </span>
            <span className="bannerIcon"  onClick={()=>handleSocila('linkedIn')}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiElectron />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>

            {/* <span className="bannerIcon">
              <SiFigma />
            </span> */}
          </div>
        </div>
      </div>
  )
}

export default Media