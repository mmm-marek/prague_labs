import styled from "styled-components";

export const Heading = styled.h1`
    margin: 0;
`;

export const PageWrapper = styled.div``;

export const Container = styled.div`
    padding: 22px 16px 22px 16px;
    max-width: 1240px;

    @media (min-width: 400px) {
        padding: 22px 100px 22px 100px;
    }
`;

export const theme = {
    colors: {
        white: "#ffffff",
        beige: "#EDEAE3",
        darkGrey: "#9C8C8C",
        darkBlue: "#1F2244",
        orange: "#FF5E55",
        green: "#119383",
        lightGrey: "#1F224433",
    },
};
