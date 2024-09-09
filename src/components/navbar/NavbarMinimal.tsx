import { rem, Tooltip, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome2, IconMenu2 } from '@tabler/icons-react';
import { NavbarMenu } from '../navbar-menu/NavbarMenu.tsx';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

interface NavbarMinimalProps {
    links: NavbarLinkProps[];
}

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
            <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
    </Tooltip>
);

export const NavbarMinimal = ({ links }: NavbarMinimalProps) => {
    const [opened, { open, close }] = useDisclosure(false);

    const navLinks = links.map((link) => (
        <NavbarLink
            {...link}
            key={link.label}
            onClick={() => {
                if (link.onClick) link.onClick();
            }}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                {navLinks.map((navLink) => (
                    <div key={navLink.props.label}>{navLink}</div>
                ))}
            </div>

            <div>
                <NavbarLink icon={IconMenu2} label="Menu" onClick={open} />
                <NavbarMenu opened={opened} onClose={close} />
            </div>
        </nav>
    );
};
