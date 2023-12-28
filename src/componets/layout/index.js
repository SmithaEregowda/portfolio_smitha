import React, { useState } from 'react'
import { NAVLINKS } from './constant'
import styles from "./layout.module.scss"

const Layout = ({children}) => {
    const [activeItem,setActiveItem]=useState("home");
    const [scrollNumber,setScrollNum]=useState("default")
    const [shownavs,setShowNav]=useState(false)
    
    const changeNavcolor=()=>{
        setScrollNum(window.scrollY);
        if(window.scrollY<700){
            setActiveItem("home")
        }else if(window.scrollY>=700&&window.scrollY<1313){
            setActiveItem("about")
        }else if(window.scrollY>=1313&&window.scrollY<1967){
            setActiveItem("skills")
        }else if(window.scrollY>=1967&&window.scrollY<2650){
            setActiveItem("project")
        }else if(window.scrollY>=1650&&window.scrollY<3277){
            setActiveItem("certificate")
        }else if(window.scrollY>=3277){
            setActiveItem("contact")
        }

    }
    window.addEventListener("scroll",changeNavcolor)
    const navItemHandler=(navItem)=>{
        setShowNav(false)
        setActiveItem(navItem?.id);
       
        let offsetTop  = document.getElementById(navItem?.id).offsetTop;
        console.log(offsetTop-100)
        window.scrollTo({
            top: offsetTop-100, 
            behavior: "smooth"
        });
    }
  return (
        <div className={`${styles.layoutWrapper} 
        ${shownavs&&styles.blackBg}
        ${(scrollNumber>=3&&scrollNumber<=20)&&styles.sleep}
        ${scrollNumber>20&&styles.scrolled}
        `}>
        <div className={styles.title}>Smitha H E</div>
        <div className={styles.navIcon}>
            <img 
                src='images/navIcon.png' 
                alt='navIcon' 
                width={30}
                height={50}
                onClick={()=>setShowNav(!shownavs)}
            />
        </div>
        <div className={`${styles.navLink} ${shownavs&&styles.navList}`}>
            {NAVLINKS?.map((nav)=>(
                <div 
                    className={`${styles.navItem} ${activeItem===nav?.id&&styles.activeItem}`}
                    onClick={()=>navItemHandler(nav)}
                >
                    <span>{nav.label}</span>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Layout