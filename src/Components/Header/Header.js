import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

function Header() {
  const mobile = window.innerWidth<=768? true:false
  const[menuOpend, setMenueOpend]= useState(false)
  return (
    
      <div className="header">
        
        <img src={Logo} alt="" className='logo'/>
        {(menuOpend===false && mobile===true)?(
          <div
          style={{backgroundColor:'var(--appColor)', padding:'0.5rem',borderRadius:'4px'}}
          onClick={()=>setMenueOpend(true)}
          
          ><img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/></div>

        ): <ul className='header-menus'>
        <li >
          <Link
          to='home'
          span={true}
          smooth={true}  
          onClick={()=>setMenueOpend(false)}>
               Home
          </Link>
        </li>
        <li >
          <Link
           to='program'
           span={true}
           smooth={true}
          onClick={()=>setMenueOpend(false)}
           
          >Programs</Link></li>
        <li >
          <Link
          to='Reasons'
          span={true}
          smooth={true}

          onClick={()=>setMenueOpend(false)}
          
          >Why us</Link>
          </li>
        <li>
          <Link 

          to='plans' // this is a id
          span={true}
          smooth={true}   
           onClick={()=>setMenueOpend(false)}  
          >
        
          Plans</Link>
          </li>
        <li ><Link
        to='testimonial'
        span={true}
        smooth={true}
        onClick={()=>setMenueOpend(false)}
        
        >
        
        Testimonials
        </Link></li>
    </ul>}
        
      
      </div>
    
  )
}

export default Header
