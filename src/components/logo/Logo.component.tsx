import Image from "next/image";
import { LogoContainer } from "./Logo.styles";

export const Logo = () => {
    return (
        <LogoContainer>
            <Image
                src="/assets/logo.svg"
                width={200}
                height={35}
                alt="Prague Labs logo"
            />
        </LogoContainer>
    );
};
