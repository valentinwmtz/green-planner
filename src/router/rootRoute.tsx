import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import App from '../App.tsx';
import { config } from '../config/config.ts';

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <App />
            {config.router.enableDebug && <TanStackRouterDevtools />}
        </>
    ),
});
