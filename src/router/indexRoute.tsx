import { createRoute } from '@tanstack/react-router';
import { PlannerPage } from '../features/planner/adapters/primary/pages/planner.page.tsx';
import { editPlants, plannerRoute } from './plannerRoute.tsx';
import { rootRoute } from './rootRoute.tsx';

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <PlannerPage />,
});

export const routeTree = rootRoute.addChildren([indexRoute, plannerRoute, editPlants]);
