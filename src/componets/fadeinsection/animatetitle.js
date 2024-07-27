import React, { useEffect, useRef, useState } from 'react'
import styles from './fadein.module.scss'

const AnimateTitle = ({children}) => {
    const domRef = useRef();
    
    const [isVisible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        console.log(entries)
        // In your case there's only one element to observe:     
        if (entries[0].isIntersecting) {
        
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      });
      
      observer.observe(domRef.current);
      
      return () => observer.disconnect();
    }, []);
  
    return (<div ref={ domRef } 
        className={ `${isVisible ? styles.animateTitle: ''}` }>
            { children }
            </div>);
}

export default AnimateTitle