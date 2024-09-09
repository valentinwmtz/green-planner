import { Loader, Tabs } from '@mantine/core';
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
            {planner.loading === 'success' && (
                <Tabs defaultValue="without-division" className="mt-4">
                    <Tabs.List>
                        <Tabs.Tab value="without-division">Sans division</Tabs.Tab>
                        <Tabs.Tab value="with-division">Avec division</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="without-division">
                        <PlannerResult parcels={planner.generatedParcels} />
                    </Tabs.Panel>
                    <Tabs.Panel value="with-division">
                        <PlannerResult parcels={planner.generatedParcelsWithDivision} />
                    </Tabs.Panel>
                </Tabs>
            )}
        </>
    );
};
