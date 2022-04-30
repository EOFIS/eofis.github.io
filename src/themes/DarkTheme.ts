import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
    font: {
        colour: {
            layer0: { normal: '#FFFFFF', hover: '#eeeeee' },
            layer1: { normal: '#000000', hover: '#111111' },
            layer2: { normal: '#20040B', hover: '#20040B' },
            layer3: { normal: '#20040B', hover: '#20040B' },
            layer4: { normal: '#000000', hover: '#000000' },
        },
        size: {
            heading: 'clamp(2.25rem,5.3vw,5rem)',
            large: '24pt',
            normal: '14pt',
            small: '12pt',
            verysmall: '8pt',
        },
        family: 'Tahoma, Geneva, sans-serif'
    },
    colour: {
        hover: {
            layer0: '#111111',
            layer1: '#EEEEEE',
            layer2: '#FCBA04',
            layer3: '#3083DC',
            layer4: '#FFFFFF',
        },
        bg: {
            layer0: '#212326',
            layer1: '#FFFFFF',
            layer2: '#FCBA04',
            layer3: '#3083DC',
            layer4: '#FFFFFF',
        }
    }
}

