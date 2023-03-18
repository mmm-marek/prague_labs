import styled from "styled-components";
import Lightbox from "react-spring-lightbox";

export const StyledLightbox = styled(Lightbox)`
    background-color: rgb(0, 0, 0, 0.8);
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    clip-path: circle();
    font-size: 16px;
    font-weight: 700;
    z-index: 10;
    cursor: pointer;
    margin-inline: 1rem;
    border: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 4.25rem;
        height: 4.25rem;
        font-size: 30px;
    }
`;
