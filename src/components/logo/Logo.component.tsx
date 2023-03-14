import Image from "next/image";

export const Logo = () => {
    return (
        <Image
            src="/assets/logo.svg"
            width={200}
            height={35}
            alt="Prague Labs logo"
        />
    );
};
