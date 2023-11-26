import React from 'react';
import './Info.css';
import { motion } from 'framer-motion';
const Info = ({ bg }) => {
  return (
    <div
      style={{
        marginLeft: '10rem',
        marginRight: '10rem',
        marginTop: '10rem',
      }}
    >
      <motion.div
        initial={{ y: '60px', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          ease: 'easeIn',
          duration: 0.2,
          transition: { delay: 0.2 },
        }}
        className="info__container"
        id="about-us"
      >
        <div className="info__image_wrapper">
          <img id="inside_image" src="roastery_inside.jpg" alt="Roastery" />
        </div>

        <div className="info__text">
          <h1 className={bg ? 'h1_info_text_white' : 'h1_info_text'}>
            Who we are?
          </h1>
          <p className={bg ? 'p_info_text_white' : 'p_info_text'}>
            We are a small micro roastery located in central Helsinki at
            Hakaniemenkatu 12. Founded in 2020 by a group of friends. We thrive
            for the best tasting cup of Java. You can find our products in well
            equipped markets as well as in our small store at our roastery.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: '60px', opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          ease: 'easeIn',
          duration: 0.2,
          transition: { delay: 0.2 },
        }}
        className="info__container"
      >
        <div className="info__text">
          <h1 className={bg ? 'h1_info_text_white' : 'h1_info_text'}>
            Exceptional Quality
          </h1>

          <p className={bg ? 'p_info_text_white' : 'p_info_text'}>
            We specialize in light roast coffee and work with small farmers. Our
            passion is to offer exceptional quality coffees, purchased as
            directly as possible from farmers or through partners who offer
            transparency from their purchasing process down to the farmer level.
          </p>
        </div>

        <div className="info__image_wrapper">
          <img id="inside_image" src="v60.png" alt="Roastery sign" />
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
