import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            colour: {
                layer0: { normal: string; hover: string; },
                layer1: { normal: string; hover: string; },
                layer2: { normal: string; hover: string; },
                layer3: { normal: string; hover: string; },
                layer4: { normal: string; hover: string; },
                dirty: string,
                delete: string,
            },
            size: {
                heading: string,
                large: string,
                normal: string,
                small: string,
                verysmall: string,
            },
            family: string,
        }
        colour: {
            primary: {
                theme: string,
                text: string,
                textHover: string
            },
            secondary: {
                theme: string
            },
            bg: {
                layer0: string;
                layer1: string;
                layer2: string;
                layer3: string;
                layer4: string;
            }
        }
    }
}