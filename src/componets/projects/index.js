import React from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from './project.module.scss'
import { Button } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import FadeInSection from '../fadeinsection'

const ProjectSection = () => {
  return (
    <div className={styles.projectWrapper}>
      <ContentHeading 
        bgText={"projects"}
        title={"My Projects"}
        info={<p>I build modern, responsive web applications using React, Node.js, and MongoDB. Each project showcases my expertise in full-stack development and UI/UX design.</p>}
        allignment={"center"}
      />
      <div className={styles.projectItems}>
        <FadeInSection>
          <div className={styles.projectItem}>
            <img
              src='images/veggisproj.png'
              alt='Veggie Shop - E-commerce Application'
              loading="lazy"
            />
            <div className={styles.projectContent}>
              <p>Veggie Shop - E-Commerce Platform</p>
              <p>
                A full-featured e-commerce website where customers can browse and purchase vegetables, add items to wishlists and shopping carts, and proceed to checkout.
              </p>
              <p>
                Features include an admin panel for product management, inventory tracking, and the ability to add, delete, or modify products in real-time.
              </p>
              <p>
                <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, SCSS
              </p>
            </div>
            <div className={styles.openLink}>
              <Button 
                type="primary"
                icon={<LinkOutlined />}
                aria-label="View Veggie Shop Website"
              >
                <a 
                  href="https://shop-products-front-end.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

export default ProjectSection