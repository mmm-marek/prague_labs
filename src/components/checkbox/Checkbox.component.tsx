import {
    StyledCheckbox,
    StyledCheckboxInfo,
    StyledCheckboxTitle,
    StyledCheckboxDescription,
    StyledInput,
} from "./Checkbox.styles";

type CheckboxProps = {
    id: string;
    title: string;
    description: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({
    id,
    title,
    description,
    checked,
    onChange,
}: CheckboxProps) => {
    return (
        <StyledCheckbox checked={checked} htmlFor={id}>
            <StyledInput
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <StyledCheckboxInfo>
                <StyledCheckboxTitle>{title}</StyledCheckboxTitle>
                <StyledCheckboxDescription>
                    {description}
                </StyledCheckboxDescription>
            </StyledCheckboxInfo>
        </StyledCheckbox>
    );
};
