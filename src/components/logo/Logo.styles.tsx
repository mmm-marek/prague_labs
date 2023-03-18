import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: flex-start;
    }
`;
