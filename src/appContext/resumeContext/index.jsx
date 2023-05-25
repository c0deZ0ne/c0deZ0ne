import { createContext} from "react";
import React, { useContext } from "react";
import { ModalContext } from "../../appContext/index";

export const ResumeContext = createContext(null);

export const ResumeProvider = ({ children }) => {
  let { openModal, setComponent } = useContext(ModalContext);
  const actionType =({action})=>{
    if (action==="view") {
        setComponent(
          <iframe
            className="flex  absolute w-[90%] h-[98%] md:w-[60%] md:h-[90%] md:left-[15%] md:right-[15%] top-[5%] max-md:top-[100px] max-md:leff-[5%] max-md:right-[5%] overflow-hidden"
            src="https://docs.google.com/document/d/e/2PACX-1vShUvS9b6ZpmFGwW_Bll_Wc7iqSAC9flRNL61aQB6hc6BpGX132s6oVosL9JIw3zu3L-SUR-KQezxyc/pub?embedded=true"
            title="Resume"
    
          ></iframe>
        );
        openModal();
      } else if (action==="download") {
        const downloadUrl =
          "https://docs.google.com/document/d/1V5h1RoohAviWE_1ha8P_s4NuCdIkCYUEBnYVkwAsIVE/export?format=pdf";
        window.location.href = downloadUrl; // Trigger download
      }
  }
 

  return (
    <ResumeContext.Provider
      value={{
        actionType
      }}
    >
      <>
        {children}{" "}
      </>
    </ResumeContext.Provider>
  );
};
