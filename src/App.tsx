import { IconGrid4x4, IconLeaf } from '@tabler/icons-react';
import { Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavbarMinimal } from './components/navbar/NavbarMinimal.tsx';
import { retrievePlantUseCase } from './features/planner/core-logic/use-cases/plant/retrieve-plant.ts';
import { editPlants, plannerRoute } from './router/plannerRoute.tsx';
import { AppDispatch } from './store/store.ts';

export const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const setRouteActive = async (value: string) => {
        await navigate({ to: `/${value}` });
    };

    const isLinkActive = (path: string | null) => {
        if (!path) return false;
        return location.pathname === path || location.pathname === `/${path}`;
    };

    const links = [
        {
            icon: IconGrid4x4,
            label: 'Planificateur',
            path: plannerRoute.path,
            onClick: () => setRouteActive(plannerRoute.path),
        },
        {
            icon: IconLeaf,
            label: 'Plantes',
            path: editPlants.path,
            onClick: () => setRouteActive(editPlants.path),
        },
    ];

    useEffect(() => {
        const retrievePlants = async () => {
            await dispatch(retrievePlantUseCase());
        };
        retrievePlants();
    }, [dispatch]);

    return (
        <>
            <NavbarMinimal
                links={links.map((link) => ({
                    ...link,
                    active: isLinkActive(link?.path || null),
                }))}
            />
            <Outlet />
        </>
    );
};

export default App;
