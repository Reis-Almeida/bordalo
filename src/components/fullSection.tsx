/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
 
import { IFullSection } from "interfaces/index";
import Section from "src/styles/Section.module.css";
import { Carousel } from 'react-responsive-carousel';

const FullSection : React.FC<IFullSection> = ({ children }) => {

    return (
        <section className={Section.sectionContainer}>
            <Carousel
                className="sectionGallery"
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                showStatus={false}
            >
                <div className={Section.sliderImg1}>
                </div>
                <div className={Section.sliderImg2}>
                </div>
                <div className={Section.sliderImg3}>
                </div>
                <div className={Section.sliderImg4}>
                </div>
            </Carousel>
            {children}
        </section>    
    );
}

export default FullSection;
