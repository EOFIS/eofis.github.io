import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
    font: {
        colour: {
            layer0: { normal: '#FFFFFF', hover: '#eeeeee' },
            layer1: { normal: '#FFFFFF', hover: '#F5F5F5' },
            layer2: { normal: '#FFFFFF', hover: '#20040B' },
            layer3: { normal: '#20040B', hover: '#20040B' },
            layer4: { normal: '#000000', hover: '#000000' },
            dirty: "#a975d0",
            delete: "#F5F5F5",
        },
        size: {
            heading: 'clamp(2.25rem,5.3vw,5rem)',
            large: '20pt',
            normal: '14pt',
            small: '12pt',
            verysmall: '8pt',
        },
        family: 'Tahoma, Geneva, sans-serif'
    },
    colour: {
        primary: {
            theme: '#a975d0',
            text: '#a975d0',
            textHover: '#a975d0'
        },
        secondary: {
            theme: '#7029a7'
        },
        bg: {
            layer0: '#212326',
            layer1: '#292c32',
            layer2: '#313337',
            layer3: '#3083DC',
            layer4: '#FFFFFF',
        }
    }
}