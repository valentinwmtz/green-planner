import { Center, MantineColorScheme, rem, SegmentedControl, useMantineColorScheme } from '@mantine/core';
import { IconBrightnessDown, IconSparkles, IconSunOff } from '@tabler/icons-react';
import { useState } from 'react';

export const ThemeModifier = () => {
    const [value, setValue] = useState('auto');
    const { setColorScheme } = useMantineColorScheme();

    const changeTheme = (value: string) => {
        setValue(value);
        setColorScheme(value as MantineColorScheme);
    };

    return (
        <SegmentedControl
            value={value}
            onChange={changeTheme}
            data={[
                {
                    value: 'auto',
                    label: (
                        <Center style={{ gap: 10 }}>
                            <IconSparkles style={{ width: rem(16), height: rem(16) }} />
                            <span>Auto</span>
                        </Center>
                    ),
                },
                {
                    value: 'dark',
                    label: (
                        <Center style={{ gap: 10 }}>
                            <IconSunOff style={{ width: rem(16), height: rem(16) }} />
                            <span>Sombre</span>
                        </Center>
                    ),
                },
                {
                    value: 'light',
                    label: (
                        <Center style={{ gap: 10 }}>
                            <IconBrightnessDown style={{ width: rem(16), height: rem(16) }} />
                            <span>Lumineux</span>
                        </Center>
                    ),
                },
            ]}
        />
    );
};
