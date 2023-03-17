import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)<{ rotateangle: number }>`
    transform: rotate(${(props) => props.rotateangle}deg);
`;
