import {
    StyledInput,
    StyledInputContainer,
    StyledInputLabel,
} from "./Input.styles";

type InputProps = {
    id: string;
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
    id,
}: InputProps) => {
    return (
        <StyledInputContainer>
            <StyledInput
                id={id}
                type="text"
                inputMode="numeric"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
            />
            {label && <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>}
        </StyledInputContainer>
    );
};
