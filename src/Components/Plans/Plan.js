import React from 'react'
import './Plan.css'
import {plansData} from '../../data/plansData'
import whitTich from '../../assets/whiteTick.png'
function Plan() {
  return (
    <div className='plans_container' id='plans'>
      <div className="blure plan-blur-1"></div>
      <div className="blure plan-blur-2"></div>
      <div className="program_header" style={{gap:'2rem'}}>
        <span className='stroke_text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke_text' >NOW WITHUS</span>
      </div>
      {/* Plans card */}
      <div className="plans">
        {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span> ${plan.price}</span>
                <div className="features">
                    {plan.features.map((feature,i)=>(
                     <div className="feature">
                        <img src={whitTich} alt="" />
                        <span key={i}>{feature}</span>
                     </div>
                    ))}
                </div>
                <div>
                    <span>see more benifits </span>
                    </div>
                    <button className='mybtn'> Join now</button>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Plan
