import { createRoute } from '@tanstack/react-router';
import { PlannerPage } from '../features/planner/adapters/primary/pages/planner.page.tsx';
import { rootRoute } from './rootRoute.tsx';

export const plannerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/planner',
    component: () => <PlannerPage />,
});

export const editPlants = createRoute({
    getParentRoute: () => rootRoute,
    path: '/plants/create',
    component: () => <PlannerPage />,
});
