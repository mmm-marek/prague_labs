import styled from "styled-components";
import Image from "next/image";

export const StyledCaravanCardContainer = styled.div`
    width: 21.4rem;
    height: 23.75rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.beige};
    overflow: hidden;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        width: 100%;
    }
`;

export const StyledContent = styled.div`
    padding: 0.75rem 1rem 1rem 1rem;
`;

export const StyledName = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
    label {
        font-size: 0.75rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.orange};
        text-transform: uppercase;
    }
    h2 {
        margin-bottom: 0.6rem;
        margin-top: 0.4rem;
    }
`;

export const StyledImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 11.875rem;
`;

export const StyledImage = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const StyledInfo = styled.div`
    padding: 0.6rem 0 0.8rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledLocation = styled.div`
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
`;

export const StyledAttributes = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`;

export const StyledAttribute = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
`;

export const StyledPriceInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 0.7rem;

    label {
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const StyledPrice = styled.div`
    display: flex;
    font-weight: bold;
    gap: 0.5rem;
`;
