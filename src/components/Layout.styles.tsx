import styled from "styled-components";

export const Heading = styled.h1`
    margin: 0;
`;

export const PageWrapper = styled.div`
    color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Container = styled.div`
    padding: 1.375rem 1rem 1.375rem 1rem;
    max-width: 1440px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 1.375rem 6.25rem 1.375rem 6.25rem;
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
        greenDark: "#0F7A6B",
        lightGrey: "#1F224433",
    },
    breakpoints: {
        xs: "400px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
    },
};
