import Image from "next/image";

type IconProps = {
    name: "arrow" | "bed" | "bolt" | "person" | "shower" | "toilet";
};

export const Icon = ({ name }: IconProps) => {
    const width = name === "bolt" ? 16 : 20;
    const height = name === "bolt" ? 16 : 20;
    return (
        <Image
            src={`/assets/${name}.svg`}
            width={width}
            height={height}
            alt={name}
        />
    );
};
