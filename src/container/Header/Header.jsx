// import React from 'react';
// import './header.scss';
// import {motion, transform} from 'framer-motion';
// import { images } from '../../constants';

// const scaleVarients = {
//   whileInView: {
//     scale: [0,1],
//     opacity: [0,1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut'
//     }
//   }
// }

// const header = () => {
//   return (
//     <div id='home' className='app_header app__flex'>
//       <motion.div
//         whileInView={{y: [-100,0], opacity: [0,1]}}
//         transition={{duration: 0.9}}
//         className='app__header-info'
//       >
//         <div className='app__header-badge'>
//           <div className='badge-cmp app__flex'>
//             <span>👋</span>
//             <div style={{marginLeft: 20}}>
//               <p className='p-text'> Hello, I am </p>
//               <h1 className='head-text'>Sumana Madhireddy</h1>
//             </div>
//           </div>
//           <div className='tag-cmp app__flex'>
//             <p className='p-text'>Web developer</p>
//             <p className='p-text'>Freelancer</p>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         whileInView={{opacity: [0,1]}}
//         transition={{duration: 0.5, delayChildren: 0.5}}
//         className='app__header-img'
//       >
//         {/* <img src={images.profile} alt='profile-bg' /> */}
//         <motion.img
//           whileInView={{scale: [0,1]}}
//           transition={{duration: 1, ease: 'easeInOut'}}
//           className='overlay_cirle'
//           src={images.circle} alt='profile_circle'
//         />
//       </motion.div>
//       <motion.div
//         variants={scaleVarients}
//         whileInView={scaleVarients.whileInView}
//         className='app__header-circles'
//       >
//         {[images.flutter, images.redux, images.sass].map((circle,index)=> (
//           <div className='circle-cmp app_flex' key={`circle-${index}`}>
//             <img src={circle} alt='circles'/>
//           </div>
//         ))}

//       </motion.div>
//     </div>
//   )
// };

// export default header;

import React from "react";
import "./Header.scss";
import { images } from '../../constants';
import { BsSendFill } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
import {motion, transform} from 'framer-motion';

const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <motion.div
          whileInView={{y: [-100,0], opacity: [0,1]}}
          transition={{duration: 0.5, delayChildren: 0.5}}
          className='header__content'
        >
          <h1 className="header__name">
            Sumana Madhireddy <span className="header__wave">👋</span>
          </h1>
          <h2 className="header__title">Web Developer</h2>
          <p className="header__description">
            I'm a creative designer based in New York, and I'm very passionate
            and dedicated to my work.
          </p>
          <button className="header__button">Say Hello <BsSendFill style={{top: '100px'}} /></button>
        </motion.div>
        {/* <div className="header__image">
        </div> */}
        <motion.div
          whileInView={{y: [-100,0], opacity: [0,1]}}
          transition={{duration: 0.5}}
          className='header__image'
        ></motion.div>
      </div>
      <div className="header__scroll">
        <BsMouse style={{height: '30px', width: '30px'}}/>
        <span>Scroll down ↓</span>
      </div>
    </div>
  );
};

export default Header;

