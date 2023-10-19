import React from 'react'
import './Testimonial.css'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import  rightArrow from '../../assets/rightArrow.png'
import {testimonialsData} from '../../data/testimonialsData'
import {motion} from 'framer-motion';
function Testimonial() {
  const transation = {type:'spring', duration :3}
    const[selected, setSelected] = useState(0);
    const tlength = testimonialsData.length
  return (
   <div className="testimonial" id='testimonial'>
    <div className="left_t">
      <span>Testimonials</span>
      <span className='stroke_text'>what they</span>
      <span>say About</span>
      <motion.span
       key={selected}
       initial={{opacity:0, x:-100}}
       animate={{opacity:1,x:0}}
       exit={{opacity:0, x:100}}
       transition={transation}
       
      
      
      >{testimonialsData[selected ].review}
       
      <span style={{color:'var(--orange)'}}>
        <br />
        {testimonialsData[selected].name}
      </span>
        - {testimonialsData[selected].status}
      </motion.span>
      
    </div>
    <div className="right_t">
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x: 0}}
        transition={{...transation,duration:2}}
        
        
        ></motion.div>
        <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x: 0}}
        transition={{...transation,duration:2}}
        
        
        >

        </motion.div>
        <motion.img
          key={selected}
          initial={{opacity:0, x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0, x:-100}}
          transition={transation}
        
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
            <img src={leftArrow} alt=""
              
              onClick={()=>{
                selected===0?setSelected(tlength-1):
                setSelected((prev)=>prev-1)
              }}
            
            /><img src={rightArrow} alt=""
              
              onClick={()=>{
                selected===tlength-1?setSelected(0):
                setSelected((prev)=>prev+1)
              }}

            />
        </div>
    </div>
   </div>
  )
}

export default Testimonial
