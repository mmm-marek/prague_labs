import React, { useState } from "react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";

type CaravanLightboxProps = {
    images: ImagesListType;
    isOpen: boolean;
    onClose: () => void;
};

export const CaravanLightbox = ({
    images,
    isOpen,
    onClose,
}: CaravanLightboxProps) => {
    const [currentImageIndex, setCurrentIndex] = useState(0);

    function gotoPrevious() {
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
    }

    function gotoNext() {
        currentImageIndex + 1 < images.length &&
            setCurrentIndex(currentImageIndex + 1);
    }

    function handleClose() {
        setCurrentIndex(0);
        onClose();
    }

    return (
        <Lightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            onClose={handleClose}
        />
    );
};
