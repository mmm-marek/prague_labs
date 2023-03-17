import styled from "styled-components";
import ReactSlider from "react-slider";

export const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props: any) =>
        props.index === 2
            ? props.theme.colors.beige
            : props.index === 1
            ? props.theme.colors.green
            : props.theme.colors.beige};
    border-radius: 999px;
`;

export const StyledThumb = styled.div`
    height: 1.5rem;
    line-height: 1.5rem;
    width: 1.5rem;
    background-color: #119383;
    border-radius: 50%;
    cursor: grab;
    top: -0.625rem;
`;

export const StyledSlider = styled(ReactSlider)`
    width: 20.5rem;
    height: 0.25rem;
    margin-top: 0.625rem;
    margin-bottom: 1.625rem;
`;
