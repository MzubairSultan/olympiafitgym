import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_img from '../../assets/boddybuilder.png'
import hero_img_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion';
import CountUp from 'react-countup'

function Hero() {
  const transation = {type:'spring', duration :3}
  const mobile = window.innerWidth<=768 ? true:false
  return (
    <div>
      <div className="hero" id='home'>
        <div className='blure hero-blur'></div>
        <div className="left-h">
            <Header/>

            {/* this is the add section */}
            <div className="best_add">
              <motion.div initial ={{left: mobile?"165px":'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transation, type:'tween'}}>
            </motion.div>
               <span>The best fitness club in the Town</span>
            </div>


            {/* hero section heading */}
            <div className="headingSection">
                
            <div className="firstheading">
              <span className='stroke_text'>Shape </span>
              <span>your</span>
            </div>

            <div className="secondheading">
                 <span>Idel Body</span>
            </div>
            <div className="pargraph_hero_section">
                <span>In here we will help you to shape and build your ideal body and live up your life to fulest</span>
            </div>
            </div> 
             {/* figure section  */}

             <div className="figure_section">
               <div className="fig1">
                <span className='fig150'>+<CountUp start={39} end={150} duration={2} delay={0} /></span>
                <span className='expert-coach'>Expert Coachs</span>
               </div>
               <div className="fig2">
               <span className='fig900'>+<CountUp start={433} end={900} duration={2} delay={0} /></span>
                <span className='MembersJoin'>Members joined</span>
               </div>
               <div className="fig3">
                <span className='fig50'>+<CountUp start={0} end={50} duration={2} delay={0} /></span>
                <span className='FitnessProgram'>Fitness Programs</span>

               </div>
             </div>
             {/* hero section buttton */}
             <div className="hero_btn">
              <button className='btn-getStarted'>Get Started</button>
              <button className='btn-LearnMore'>Learn More</button>
             </div>

        </div>
        <div className="right-h">
            <button className='joinNow'>Join Now</button>


            <motion.div
              initial={{right: "-1rem"}}
              whileInView={{left : "4rem"}} 
              transition={transation}
            className="heart-rate">
              <img src={heart} alt="" />
              <span className='herartext'>Heart Rate</span>
              <span className='bpm117'>117 bpm</span>
            </motion.div>
            {/* Hero image  */}
            <img src={hero_img} alt=""  className='hero_img'/>
            <motion.img
              initial={{right: "11rem"}}
              whileInView={{right : "20rem"}} 
              transition={transation}
            src={hero_img_back} alt=""  className='hero_back_img'/>
            <motion.div 
             initial={{right: "37rem"}}
             whileInView={{right : "28rem"}} 
             transition={transation}
             className="calories">
              <img src={Calories} alt="" />
              <div>

              <span className='calories_burned'>Calories Burned</span>
              <span className='calories_230'>230 kcal</span>

              </div>
              
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
