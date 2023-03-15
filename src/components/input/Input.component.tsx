import {
    StyledInput,
    StyledInputContainer,
    StyledInputLabel,
} from "./Input.styles";

type InputProps = {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min: number;
    max: number;
    placeholder: string;
    label: string;
};

export const Input = ({
    placeholder,
    value,
    onChange,
    min,
    max,
    label,
}: InputProps) => {
    return (
        <StyledInputContainer>
            <StyledInput
                type="text"
                inputMode="numeric"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
            />
            {label && <StyledInputLabel>{label}</StyledInputLabel>}
        </StyledInputContainer>
    );
};
