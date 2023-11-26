import React from 'react';
import './Logo.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
const Logo = () => {
  const scrollToAbout = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="logo_container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 1 }}
        className="wrapper"
      >
        <img
          id="logo__image"
          src="roastery.jpg"
          alt="helsinki coffee roastery logo"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: '-50px' }}
        animate={{ opacity: 1, y: '0px' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className="heading"
      >
        <h1> Helsinki Coffee Roasters</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: '-50px' }}
        animate={{ opacity: 1, y: '0px' }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
        style={{ padding: 0, margin: 0 }}
      >
        <p className="p_subtitle">
          Because everyone deserves a good cup of tsufe
        </p>
      </motion.div>
      <div className="chevron">
        <ScrollLink href="#about-us" onClick={scrollToAbout}>
          <ExpandMoreIcon
            id="chevron_icon"
            color="black"
            sx={{ fontSize: 80 }}
          />
        </ScrollLink>
      </div>
    </div>
  );
};

export default Logo;
