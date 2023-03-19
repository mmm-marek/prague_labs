import styled from "styled-components";

export const StyledFiltersSection = styled.section`
    display: flex;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.beige};
    border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledFilterWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 27% 56% 17%;
        padding-inline: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-inline: 6.25rem;
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

export const StyledFiltersContainer = styled.div`
    width: 100%;
    padding: 1.4375rem 1rem;
    min-height: 10px; // TODO DELETE
    border-bottom: 1px solid ${({ theme }) => theme.colors.beige};

    &:last-child {
        border-bottom: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        border-bottom: 0;
        border-right: 1px solid ${({ theme }) => theme.colors.beige};

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            border-right: 0;
            padding-right: 0;
        }
    }
`;

export const StyledInputContainer = styled.div`
    display: flex;
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

export const StyledCaravanGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
