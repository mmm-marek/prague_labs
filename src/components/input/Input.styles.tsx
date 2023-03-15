import styled from "styled-components";

export const StyledInput = styled.input`
    width: 9.75rem;
    height: 3rem;
    border: 1px solid #edeae3;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding-left: 1rem;
    color: #1f2244;

    &:focus {
        outline: none;
    }
`;

export const StyledInputContainer = styled.div`
    position: relative;
    width: fit-content;
`;

export const StyledInputLabel = styled.label`
    position: absolute;
    top: 33%;
    right: 0.75rem;
    color: #9c8c8c;
`;
