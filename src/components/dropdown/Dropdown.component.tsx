import type { Option } from "react-dropdown";
import { Icon } from "../icon/Icon.component";
import { StyledReactDropdown } from "./Dropdown.styles";

type DropdownProps = {
    options: { value: string; label: string }[];
    onChange: (arg: Option) => void;
    value?: { value: string; label: string };
};

export const Dropdown = ({ options, onChange, value }: DropdownProps) => {
    return (
        <StyledReactDropdown
            value={value}
            options={options}
            onChange={onChange}
            placeholder="Select an option"
            arrowOpen={<Icon name="arrow" rotate={180} />}
            arrowClosed={<Icon name="arrow" />}
        />
    );
};
