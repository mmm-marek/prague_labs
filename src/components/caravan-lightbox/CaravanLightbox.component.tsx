import { useState } from "react";
import type { ImagesListType } from "react-spring-lightbox";
import { StyledButton, StyledLightbox } from "./CaravanLightbox.styles";

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
        <StyledLightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            onClose={handleClose}
            renderNextButton={() => {
                return currentImageIndex !== images.length - 1 ? (
                    <StyledButton onClick={gotoNext}>&gt;</StyledButton>
                ) : null;
            }}
            renderPrevButton={() => {
                return currentImageIndex !== 0 ? (
                    <StyledButton onClick={gotoPrevious}>&lt;</StyledButton>
                ) : null;
            }}
        />
    );
};
