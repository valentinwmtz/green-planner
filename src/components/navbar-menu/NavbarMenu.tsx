import { Drawer } from '@mantine/core';
import { ThemeModifier } from '../theme-modifier/ThemeModifier.tsx';

interface NavbarMenuProps {
    opened: boolean;
    onClose: () => void;
}

export const NavbarMenu = ({ opened, onClose }: NavbarMenuProps) => {
    return (
        <Drawer opened={opened} onClose={onClose} position={'right'} title="Menu" withOverlay={true}>
            <ThemeModifier />
        </Drawer>
    );
};
