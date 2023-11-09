import React, { useEffect, useState } from 'react';
import Lightbox, { ImagesListType } from 'react-spring-lightbox';

type Props = {
    isOpen: boolean;
    position: number;
    images: ImagesListType;
    toggleVisibility: (isOpen: boolean, position: number) => void;
}

const CoolLightbox: React.FC<Props> = ({isOpen, position, images, toggleVisibility}) => {
    const [currentImageIndex, setCurrentIndex] = useState(position);

    useEffect(() => {
        setCurrentIndex(position);
    }, [position]);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

        const handleClose = () => {
            toggleVisibility(false, 0);
        }

    return (
        <Lightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.82)" }}

            /* Add your own UI */
            // renderHeader={() => (<CustomHeader />)}
            // renderFooter={() => (<CustomFooter />)}
            // renderPrevButton={() => (<CustomLeftArrowButton />)}
            // renderNextButton={() => (<CustomRightArrowButton />)}
            // renderImageOverlay={() => (<ImageOverlayComponent >)}

            /* Add styling */
            // className="cool-class"
            // style={{ background: "grey" }}

            /* Handle closing */
            onClose={handleClose}

            /* Use single or double click to zoom */
            // singleClickToZoom

            /* react-spring config for open/close animation */
            // pageTransitionConfig={{
            //   from: { transform: "scale(0.75)", opacity: 0 },
            //   enter: { transform: "scale(1)", opacity: 1 },
            //   leave: { transform: "scale(0.75)", opacity: 0 },
            //   config: { mass: 1, tension: 320, friction: 32 }
            // }}
        />
    );
};

export default CoolLightbox;