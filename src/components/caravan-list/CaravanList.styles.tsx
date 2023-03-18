import styled from "styled-components";

export const StyledCaravanListContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const StyledNoResults = styled.p`
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
`;
