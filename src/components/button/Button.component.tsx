import React from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
