import React, { useState, useEffect } from 'react'
import { NAVLINKS } from './constant'
import styles from "./layout.module.scss"

const Layout = ({children}) => {
    const [activeItem, setActiveItem] = useState("home");
    const [scrollNumber, setScrollNum] = useState("default")
    const [shownavs, setShowNav] = useState(false)
    
    const changeNavcolor = () => {
        setScrollNum(window.scrollY);
        if(window.scrollY < 700){
            setActiveItem("home")
        } else if(window.scrollY >= 700 && window.scrollY < 1313){
            setActiveItem("about")
        } else if(window.scrollY >= 1313 && window.scrollY < 1967){
            setActiveItem("skills")
        } else if(window.scrollY >= 1967 && window.scrollY < 2650){
            setActiveItem("project")
        } else if(window.scrollY >= 1650 && window.scrollY < 3277){
            setActiveItem("certificate")
        } else if(window.scrollY >= 3277){
            setActiveItem("contact")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavcolor)
        return () => window.removeEventListener("scroll", changeNavcolor)
    }, [])

    const navItemHandler = (navItem) => {
        setShowNav(false)
        setActiveItem(navItem?.id);
       
        let offsetTop = document.getElementById(navItem?.id).offsetTop;
        window.scrollTo({
            top: offsetTop - 100, 
            behavior: "smooth"
        });
    }

    const handleNavToggle = () => {
        setShowNav(!shownavs);
    }

    const handleKeyPress = (e, navItem) => {
        if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            navItemHandler(navItem);
        }
    }

    return (
        <div className={`${styles.layoutWrapper} 
        ${shownavs && styles.blackBg}
        ${(scrollNumber >= 3 && scrollNumber <= 20) && styles.sleep}
        ${scrollNumber > 20 && styles.scrolled}
        `}
        role="navigation"
        aria-label="Main navigation"
        >
            <div className={styles.title} role="heading" aria-level="1">
                Smitha H E
            </div>
            <button
                className={styles.navIcon}
                onClick={handleNavToggle}
                aria-label={shownavs ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={shownavs}
                aria-controls="nav-menu"
            >
                <img 
                    src='images/navIcon.png' 
                    alt='Menu'
                    width={30}
                    height={50}
                />
            </button>
            <nav 
                className={`${styles.navLink} ${shownavs && styles.navList}`}
                id="nav-menu"
            >
                {NAVLINKS?.map((nav) => (
                    <div 
                        key={nav.id}
                        className={`${styles.navItem} ${activeItem === nav?.id && styles.activeItem}`}
                        onClick={() => navItemHandler(nav)}
                        onKeyPress={(e) => handleKeyPress(e, nav)}
                        role="menuitem"
                        tabIndex="0"
                        aria-current={activeItem === nav?.id ? "page" : undefined}
                    >
                        <span>{nav.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Layout