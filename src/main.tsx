import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import dayjs from 'dayjs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { NotFound } from './components/not-found/NotFound.tsx';
import { demoPortsConfiguration } from './config/portsConfiguration.ts';
import { routeTree } from './router/indexRoute.tsx';
import { AllEpics, initReduxStore } from './store/store.ts';
import 'dayjs/locale/fr';
import '@mantine/core/styles.css';
import { theme } from './style/theme.ts';

dayjs.locale('fr');

const router = createRouter({ routeTree, defaultPreload: 'intent', defaultNotFoundComponent: () => <NotFound /> });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
const store = initReduxStore({
    gateways: demoPortsConfiguration,
    epics: AllEpics,
});

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <MantineProvider theme={theme} defaultColorScheme={'auto'}>
                <DatesProvider settings={{ locale: 'fr' }}>
                    <Provider store={store}>
                        <div className={'content'}>
                            <RouterProvider router={router} />
                        </div>
                    </Provider>
                </DatesProvider>
            </MantineProvider>
        </StrictMode>,
    );
}
