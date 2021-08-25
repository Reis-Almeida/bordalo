import React from 'react';
 
import { IFullSection } from "interfaces/index";
import { Carousel } from 'react-responsive-carousel';
import { Section } from './style';

const SectionFull : React.FC<IFullSection> = ({ children }) => {

    return (
        <Section>
            <Carousel
                className="sectionGallery"
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                showStatus={false}
            >
                <div className={"sliderImg1"}>
                </div>
                <div className={"sliderImg2"}>
                </div>
                <div className={"sliderImg3"}>
                </div>
                <div className={"sliderImg4"}>
                </div>
            </Carousel>
            {children}
        </Section>    
    );
}

export default SectionFull;
