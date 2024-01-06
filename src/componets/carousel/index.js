import { Button } from 'antd';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carosel.module.scss'
import { downloadcv } from '../../commoncomponents/utils/downloadcv';
import FadeInSection from '../fadeinsection';

const CarouselComponent = () => {
  const navItemHandler=()=>{
    let offsetTop  = document.getElementById("contact").offsetTop;
    window.scrollTo({
        top: offsetTop-100, 
        behavior: "smooth"
    });
}

  return (
    <Carousel  
    autoPlay={true} 
    showThumbs={false} 
    infiniteLoop={true}
     className={styles.carouselWrapper}
     showArrows={false}
     swipeable={true}
     >
               <div className={styles.carouselContent}>
                    <div className={styles.describeSection}>
                    <div>
                        <div className={styles.smallText}>Hello !</div>
                        <div className={styles.intro}>I'm <span className={styles.name}>Smitha H E</span></div>
                        <div className={styles.job}>A Software Developer</div>
                        
                        <div className={styles.btnActions}>
                        <FadeInSection>
                          <Button 
                            type="primary"
                            onClick={downloadcv}
                          >Download CV</Button>
                          </FadeInSection>
                          <FadeInSection>
                          <Button type="primary" onClick={navItemHandler}>
                            Hire Me
                          </Button>
                          </FadeInSection>
                        </div>
                        
                    </div>
                    </div>
                    <div className={styles.imageSection}>
                    <img
                    src={"images/resumepic.png"} 
                    width={200}
                    height={200}
                    alt='resumepic'/>
                    </div>
               </div>
               <div className={styles.carouselContent}>
                    <div className={styles.describeSection}>
                        <div>
                        <div className={styles.intro1}>
                            <span className={styles.name1}>
                                UI Developer</span> with a <br />
                               <div className={styles.subText}> Passion for Creating Beautiful Websites</div>
                        </div>
                        
                        <div className={styles.btnActions}>
                        <FadeInSection>
                          <Button 
                          type="primary"
                          onClick={downloadcv}
                          >Download CV</Button></FadeInSection>
                          <FadeInSection>
                          <Button type="primary" onClick={navItemHandler}>
                            Hire Me
                          </Button></FadeInSection>
                        </div>
                        

                        </div>
                    </div>
                    <div className={styles.imageSection}>
                    <img
                    src={"images/working.jpeg"} 
                    width={200}
                    alt='resumepic'/>
                    </div>
               </div>
            </Carousel>
  )
}

export default CarouselComponent