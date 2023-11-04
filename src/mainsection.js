import React from 'react'
import AboutSection from './componets/about'
import CarouselComponent from './componets/carousel'
import CertificateSections from './componets/certificates'
import ContactSection from './componets/contact'
import FooterSection from './componets/footer'
import ProjectSection from './componets/projects'
import Skills from './componets/skills'

const MainContentSection = () => {
  return (
    <div>
        <div id='home'>
          <CarouselComponent />
        </div>
        <div id='about'>
          <AboutSection />
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='project'>
          <ProjectSection />
        </div>
        <div id='certificate'>
          <CertificateSections />
        </div>
        <div id='contact'>
          <ContactSection />
        </div>
        <FooterSection />
    </div>
  )
}

export default MainContentSection