import styled from "styled-components";
import Image from "next/image";

export const StyledCaravanCard = styled.div`
    width: 21.4rem;
    height: 23.75rem;
    border-radius: 0.5rem;
    border: 1px solid #edeae3;
    overflow: hidden;
    color: #1f2244;
`;

export const StyledContent = styled.div`
    padding: 0.75rem 1rem 1rem 1rem;
`;

export const StyledName = styled.div`
    width: 100%;
    border-bottom: 1px solid #edeae3;
    label {
        font-size: 0.75rem;
        font-weight: bold;
        color: #ff5e55;
        text-transform: uppercase;
    }
    h2 {
        margin-bottom: 0.6rem;
        margin-top: 0.4rem;
    }
`;

export const StyledImage = styled(Image)`
    object-fit: cover;
`;

export const StyledInfo = styled.div`
    padding: 0.6rem 0 0.8rem 0;
    border-bottom: 1px solid #edeae3;
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
        color: #9c8c8c;
    }
`;

export const StyledPrice = styled.div`
    display: flex;
    font-weight: bold;
    gap: 0.5rem;
`;
