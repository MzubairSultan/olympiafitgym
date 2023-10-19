import React from 'react'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import './Program.css'
function Program() {
  return (
    <div className="program" id="program">

       <div className="program_header">
        <span className='stroke_text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke_text'>to shape you</span>
       </div>
       <div className="programCatgory">
          {programsData.map( (program)=>(
             <div className="catagory">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join_now">
                    <span>join now</span>
                     <img src={RightArrow} alt="" /> 
                </div>
             </div>
          ))}

       </div>

    </div>
  )
}

export default Program
