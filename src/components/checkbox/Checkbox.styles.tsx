import styled from "styled-components";

export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.75rem;
    min-height: 5.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
    ${({ checked, theme }: { checked: boolean; theme: any }) =>
        checked
            ? `
            border: 2px solid ${theme.colors.green};
        `
            : `
            border: 1px solid ${theme.colors.beige};  
        `}
`;

export const StyledCheckboxInfo = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`;

export const StyledCheckboxTitle = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 0.25rem;
`;

export const StyledCheckboxDescription = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledInput = styled.input`
    display: none;
`;
