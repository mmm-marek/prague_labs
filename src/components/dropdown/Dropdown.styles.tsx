import styled from "styled-components";
import ReactDropdown from "react-dropdown";

export const StyledReactDropdown = styled(ReactDropdown)`
    cursor: pointer;
    position: relative;

    &.is-open .Dropdown-control {
        border-color: ${({ theme }) => theme.colors.darkBlue};
    }

    .Dropdown-control {
        width: 100%;
        max-width: 11rem;
        height: 3rem;
        border: 1px solid ${({ theme }) => theme.colors.beige};
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 0.75rem;
    }

    .Dropdown-menu {
        width: 100%;
        max-width: 11rem;
        margin-top: 0.5rem;
        display: flex;
        gap: 0.25rem;
        position: absolute;
        flex-direction: column;
        z-index: 10;
    }

    .Dropdown-option {
        cursor: pointer;
        padding: 0.5rem;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.beige};
        border-radius: 8px;
        &:hover {
            border-color: ${({ theme }) => theme.colors.darkBlue};
        }
    }
`;
