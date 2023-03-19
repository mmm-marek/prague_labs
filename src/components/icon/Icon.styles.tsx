import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)<{ rotate: number }>`
    transform: rotate(${(props) => props.rotate}deg);
`;
