import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            colour: {
                layer0: { normal: string; },
                layer1: { normal: string; },
                layer2: { normal: string; },
                layer3: { normal: string; },
                layer4: { normal: string; },
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
