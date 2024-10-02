import React from 'react';
import { TamaguiProvider, Text, YStack } from '@tamagui/core';
import tamaguiConfig from './tamagui.config';

export default function App() {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <YStack>
                <Text>Hello Tamagui</Text>
            </YStack>
        </TamaguiProvider>
    );
}
