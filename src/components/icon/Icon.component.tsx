import { StyledImage } from "./Icon.styles";

type IconProps = {
    name: "arrow" | "bed" | "bolt" | "person" | "shower" | "toilet";
    rotateangle?: number;
};

export const Icon = ({ name, rotateangle }: IconProps) => {
    const width = name === "bolt" ? 16 : name === "arrow" ? 22 : 20;
    const height = name === "bolt" ? 16 : name === "arrow" ? 22 : 20;
    return (
        <StyledImage
            src={`/assets/${name}.svg`}
            width={width}
            height={height}
            alt={name}
            rotateangle={rotateangle || 0}
        />
    );
};
