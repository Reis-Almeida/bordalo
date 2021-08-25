import React, { Suspense } from 'react';  

import { CSSTransition } from 'react-transition-group';

import { AiOutlineClose } from "react-icons/ai";

import { ICarousel } from "interfaces";
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';

import SuspenseImage from "src/components/SuspenseImage";
import { Modal } from './style';

const Loading : React.FC = () => {
    return (
        <div className="suspense">
            Carregando...
        </div>
    )
}

const Carousel : React.FC<ICarousel> = ({ activeModal, setActiveModal, ListPhotos }) => {

    const closeModal = () => setActiveModal(false);

    return (
        <CSSTransition 
            in={activeModal}
            timeout={300}
            classNames="alert"
            unmountOnExit
        >
            <Modal>
                <div className="modalActions">
                    <a href="#" onClick={closeModal}>
                        <AiOutlineClose 
                            size={35}
                            color={"#eee"}

                        />
                    </a>
                </div>

                <div className="gallery">
                    <GalleryCarousel
                        showThumbs={false}
                        showIndicators={false}
                        className="sliderGallery"
                    >
                        {ListPhotos?.map((photo : any, i : number) => (
                            <Suspense fallback={<Loading />} key={i.toString()}>
                                <div className="imageContainer">
                                    <SuspenseImage 
                                        src={photo.Link[1].URLArquivo} 
                                        height={800}
                                        width={1200}
                                    />
                                </div>
                            </Suspense>
                        ))}
                    </GalleryCarousel>
                </div>
            </Modal>
        </CSSTransition> 
    );
}

export default Carousel;