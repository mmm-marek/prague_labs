import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    padding: 0.875rem 2.25rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.greenDark};
    }
`;
