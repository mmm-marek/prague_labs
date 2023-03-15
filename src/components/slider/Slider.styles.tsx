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
    height: 24px;
    line-height: 24px;
    width: 24px;
    background-color: #119383;
    border-radius: 50%;
    cursor: grab;
    top: -10px;
`;

export const StyledSlider = styled(ReactSlider)`
    width: 328px;
    height: 4px;
`;
