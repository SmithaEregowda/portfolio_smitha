import { Button } from "antd";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carosel.module.scss";
import { downloadcv } from "../../commoncomponents/utils/downloadcv";
import FadeInSection from "../fadeinsection";

const CarouselComponent = () => {
  const navItemHandler = () => {
    let offsetTop = document.getElementById("contact").offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      className={styles.carouselWrapper}
      showArrows={false}
      swipeable={true}
      interval={6000}
      transitionTime={800}
      stopOnHover={true}
    >
      {/* Slide 1: Introduction */}
      <div className={styles.carouselContent}>
        <div className={styles.describeSection}>
          <div>
            <div className={styles.smallText}>Hello !</div>
            <div className={styles.intro}>
              I'm <span className={styles.name}>Smitha H E</span>
            </div>
            <div className={styles.job}>A Full-Stack Web Developer</div>

            <div className={styles.btnActions}>
              <FadeInSection>
                <Button
                  type="primary"
                  size="large"
                  onClick={downloadcv}
                  icon={<DownloadOutlined />}
                  aria-label="Download CV"
                >
                  Download CV
                </Button>
              </FadeInSection>
              <FadeInSection>
                <Button
                  type="primary"
                  size="large"
                  onClick={navItemHandler}
                  icon={<ArrowRightOutlined />}
                  aria-label="Hire me"
                >
                  Hire Me
                </Button>
              </FadeInSection>
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img
            src="images/dp.png"
            width={200}
            height={200}
            alt="Profile Picture - Smitha H E"
            loading="lazy"
          />
        </div>
      </div>

      {/* Slide 2: Developer Focus */}
      <div className={styles.carouselContent}>
        <div className={styles.describeSection}>
          <div>
            <div className={styles.intro1}>
              <span className={styles.name1}>FRONTEND/MERN Developer</span>
              <div className={styles.subText}>
                with a Passion for Creating Beautiful & Functional Websites
              </div>
            </div>

            <div className={styles.btnActions}>
              <FadeInSection>
                <Button
                  type="primary"
                  size="large"
                  onClick={downloadcv}
                  icon={<DownloadOutlined />}
                  aria-label="Download CV"
                >
                  Download CV
                </Button>
              </FadeInSection>
              <FadeInSection>
                <Button
                  type="primary"
                  size="large"
                  onClick={navItemHandler}
                  icon={<ArrowRightOutlined />}
                  aria-label="Hire me"
                >
                  Hire Me
                </Button>
              </FadeInSection>
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img
            src="images/working.jpeg"
            width={200}
            alt="Developer coding"
            loading="lazy"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
