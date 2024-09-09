import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { InitReduxStoreReturnType } from '../../store/store.ts';
import { theme } from '../../style/theme.ts';

export function renderTest(ui: React.ReactNode, store?: InitReduxStoreReturnType) {
    return testingLibraryRender(<>{ui}</>, {
        wrapper: ({ children }: { children: React.ReactNode }) => (
            <MantineProvider theme={theme}>
                {store ? <Provider store={store}>{children}</Provider> : children}
            </MantineProvider>
        ),
    });
}
