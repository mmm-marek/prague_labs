import styled from "styled-components";

export const StyledFilters = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-direction: row;
        padding-inline: 6.25rem;
        border-top: 1px solid ${({ theme }) => theme.colors.beige};
        border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
    }
`;

export const StyledFilterContainer = styled.div`
    width: 100%;
    padding: 1.4rem 1.9rem 1.4rem 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.beige};

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        padding-inline: 1rem;
        border-top: 0;
        border-right: 1px solid ${({ theme }) => theme.colors.beige};

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            border: 0;
            padding-right: 0;
        }
    }
`;

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 1rem;
`;

export const StyledCheckboxGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StyledInputContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-direction: row;
    }
`;
