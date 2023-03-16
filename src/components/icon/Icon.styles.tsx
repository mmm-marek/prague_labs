import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)<{ rotateAngle: number }>`
    transform: rotate(${(props) => props.rotateAngle}deg);
`;
