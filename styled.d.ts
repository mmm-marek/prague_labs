// styled.d.ts
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            white: string;
            beige: string;
            darkGrey: string;
            darkBlue: string;
            orange: string;
            green: string;
            greenDark: string;
            lightGrey: string;
        };
    }
}
