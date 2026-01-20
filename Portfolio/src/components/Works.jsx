import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link,
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a href={web_link} target="_blank" rel="noopener noreferrer">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[375px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      </a>
    </motion.div>
  );
};

const AllProjectsCard = ({ index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a 
        href="https://compiledworks.netlify.app/#home" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-5 rounded-2xl sm:w-[375px] w-full relative overflow-hidden group'
        >
          {/* Animated gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          
          {/* Content */}
          <div className='relative z-10'>
            <div className='relative w-full h-[230px] flex flex-col items-center justify-center'>
              {/* Icon/Visual Element */}
              <div className='text-white text-8xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                🚀
              </div>
              <h3 className='text-white font-bold text-[32px] text-center drop-shadow-lg'>
                View All Projects
              </h3>
              <p className='text-white/90 text-[16px] text-center mt-2 font-semibold'>
                Compiled Works Collection
              </p>
            </div>

            <div className='mt-5'>
              <p className='text-white text-[16px] text-center leading-relaxed'>
                Explore my complete portfolio of projects, case studies, and creative works all in one place.
              </p>
            </div>

            <div className='mt-6 flex justify-center'>
              <div className='bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40 group-hover:border-white group-hover:bg-white/30 transition-all duration-300'>
                <p className='text-white font-bold text-[14px]'>
                  Click to Explore →
                </p>
              </div>
            </div>
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Portfolio Showcase</p>
        <h2 className={`${styles.sectionHeadText}`}>All Compiled Works</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-2xl leading-[30px] text-center'
        >
          Explore my complete collection of projects, case studies, and creative works in one place.<br/>
          Click below to view the full Compiled Works portfolio site.
        </motion.p>
      </div>
      <div className='mt-20 flex justify-center'>
        <AllProjectsCard index={0} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
