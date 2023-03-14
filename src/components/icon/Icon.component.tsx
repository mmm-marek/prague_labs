import { StyledIcon } from "./Icon.styles";

type IconProps = {
    name: "arrow" | "bed" | "bolt" | "person" | "shower" | "toilet";
};

export const Icon = ({ name }: IconProps) => {
    const width = name === "bolt" ? 16 : 20;
    const height = name === "bolt" ? 16 : 20;
    return (
        <StyledIcon src={`/assets/${name}.svg`} width={width} height={height} />
    );
};
