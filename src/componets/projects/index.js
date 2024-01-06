import React from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from './project.module.scss'
import { Button } from 'antd'
import FadeInSection from '../fadeinsection'

const ProjectSection = () => {
  return (
    <div className={styles.projectWrapper}>
       <ContentHeading 
                bgText={"projects"}
                title={"My Projects"}
                info={<p>Hi! , I'm Smitha H E , UI Developer with passion towards 
                creating Web Application <br /> Here some of the details About me:</p>}
                allignment={"center"}
           />
           <div className={styles.projectItems}>
              <FadeInSection>
              <div className={styles.projectItem}>
                <div className={styles.openLink}>
                <Button>
                  <a href="https://shop-products-front-end.vercel.app/" 
                  target="blank">
                    View Website
                    </a>
                </Button>
                </div>
                <img
                  src='images/veggisproj.png'
                  alt='veggetableproj'
                  height={285}
                />
                <div>
                  <p>
                    Veggitable shop is an ecommerce website where customers can buy verietis of Veggitables
                    also they can add product to the wishlist or cart and they can checkout
                  </p>
                  <p>
                    curently I am working on this projects yet to add more fuctionalities like payment,
                    user profile , order summary etc...
                  </p>
                  <p>
                   one more cool feature about this projects is here admin can use the same website to 
                   add products and they can delete or modify products.
                  </p>
                </div>
              </div>
              </FadeInSection>
            </div>
    </div>
  )
}

export default ProjectSection