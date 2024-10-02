import { createTokens } from 'tamagui';

export const tokens = createTokens({
    colors: {
        background: '#ffffff',
        primary: '#6200ee',
        secondary: '#03dac6',
        text: '#000000',
        error: '#b00020',
    },
    space: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        true: 16, // Default space value
    },
    size: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        true: 16, // Default size value
    },
    radius: {
        sm: 4,
        md: 8,
        lg: 16,
        xl: 24,
        true: 8, // Default radius value
    },
});
