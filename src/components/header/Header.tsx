import { Title } from '@mantine/core';
import classes from './Header.module.css';

export const CustomHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
    return (
        <div className={classes.customHeader}>
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                <Title order={2} className={classes.title}>
                    {title}
                </Title>
                {subtitle && (
                    <Title order={4} className={classes.subTitle}>
                        {subtitle}
                    </Title>
                )}
            </div>
        </div>
    );
};
