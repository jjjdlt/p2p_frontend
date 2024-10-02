import { createTamagui, createTokens } from '@tamagui/core';

const tokens = createTokens({
    size: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        true: 16,
    },
    space: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        true: 16,
    },
});

const tamaguiConfig = createTamagui({
    tokens,
    themes: {
        light: {
            background: '#ffffff',
            color: '#000000',
            primary: '#6200ee',
            secondary: '#03dac6',
            error: '#b00020',
        },
    },
    defaultTheme: 'light',
});

export default tamaguiConfig;
