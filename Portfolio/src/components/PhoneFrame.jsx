import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const PhoneFrame = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Interactive Demo</p>
        <h2 className={styles.sectionHeadText}>Live Preview</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 flex justify-center"
      >
        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <iframe 
              src="https://periodcalcsfair2019.netlify.app/" 
              frameBorder="0"
              title="App Preview"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(PhoneFrame, "phoneframe");
