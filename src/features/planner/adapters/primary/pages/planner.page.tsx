import { Loader } from '@mantine/core';
import { useSelector } from 'react-redux';
import { CustomHeader } from '../../../../../components/header/Header.tsx';
import { PlanForm } from '../components/PlanForm.tsx';
import { PlannerResult } from '../components/PlannerResult.tsx';
import { plannerSelector } from '../selectors/plannerSelector.ts';
import { plantList, plantsLoadingSelector } from '../selectors/plantsSelector.ts';

export const PlannerPage = () => {
    const planner = useSelector(plannerSelector);
    const plants = useSelector(plantList);
    const plantsLoading = useSelector(plantsLoadingSelector);
    return (
        <>
            <CustomHeader title="Planification du potager" />
            {planner.loading === 'idle' && <PlanForm plants={plants} plantsLoading={plantsLoading} />}
            {planner.loading === 'pending' && (
                <div className="flex justify-center items-center h-3/4">
                    <Loader />
                </div>
            )}
            {planner.loading == 'error' && (
                <div className="flex justify-center items-center h-3/4">
                    <p className="text-red-500">Une erreur est survenue {planner.error?.message}</p>
                </div>
            )}
            {planner.loading === 'success' && <PlannerResult parcels={planner.generatedParcels} />}
        </>
    );
};
