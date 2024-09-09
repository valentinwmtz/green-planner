import { Box, Button, Card, Center, NumberInput, Paper, Select, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AppDispatch } from '../../../../../store/store.ts';
import { LoadingStatus } from '../../../../../types/loading.ts';
import { generateParcelUseCase } from '../../../core-logic/use-cases/plan/generate-parcel.ts';
import { PlanAlgorithme } from '../../../core-logic/use-cases/plan/plan-algorithme.ts';

export interface Parcel {
    id: string;
    size: number;
}

export interface PlanFormValues {
    plantsId: string[];
    personNumber: number;
    parcels: Parcel[];
    algorithm: PlanAlgorithme;
}

interface PlanFormProps {
    plants: { name: string; id: string }[];
    plantsLoading: LoadingStatus;
}

export const PlanForm: React.FC<PlanFormProps> = ({ plants, plantsLoading }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedPlants, setSelectedPlants] = useState<string[]>([]);

    const form = useForm<PlanFormValues>({
        mode: 'uncontrolled',
        initialValues: {
            plantsId: [],
            personNumber: 1,
            parcels: [
                {
                    id: uuidv4(),
                    size: 10,
                },
            ],
            algorithm: 'glouton',
        },
        validate: {
            plantsId: (value) => (value.length < 2 ? 'At least two plants is required' : null),
            personNumber: (value) => (value < 1 ? 'At least one person is required' : null),
            parcels: (value) => {
                const hasInvalidParcel = value.some((parcel) => parcel.size <= 0);
                return hasInvalidParcel ? 'All parcels must have a size greater than 0' : null;
            },
        },
    });

    const handleSubmit = async (values: PlanFormValues) => {
        await dispatch(generateParcelUseCase(values));
    };

    const togglePlant = (plantId: string) => {
        setSelectedPlants((prev) => {
            const newSelection = prev.includes(plantId) ? prev.filter((id) => id !== plantId) : [...prev, plantId];
            form.setFieldValue('plantsId', newSelection);
            return newSelection;
        });
    };

    const addParcel = () => {
        form.insertListItem('parcels', { id: uuidv4(), size: 10 });
    };

    const removeParcel = (index: number) => {
        form.removeListItem('parcels', index);
    };

    const selectAllPlants = () => {
        const allPlantIds = plants.map((plant) => plant.id);
        form.setFieldValue('plantsId', allPlantIds);
        setSelectedPlants(allPlantIds);
    };

    return (
        <div className="flex flex-col items-center w-full mt-2">
            <Paper shadow="xs" p="md" withBorder className="m-4 w-11/12">
                <Center mb="md">
                    <Title order={3}>Create a Plan</Title>
                </Center>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        <Box>
                            <Title order={4} mb="sm">
                                Select Plants
                            </Title>
                            <p style={{ color: 'red' }}>{form.errors.plantsId}</p>
                            <div className="flex justify-between items-center mb-4">
                                <Button
                                    onClick={() => {
                                        selectAllPlants();
                                    }}
                                >
                                    Select All
                                </Button>
                            </div>
                            <SimpleGrid cols={3} className="max-h-60 overflow-y-scroll">
                                {plants.map((plant) => (
                                    <Card
                                        key={plant.id}
                                        shadow="sm"
                                        padding="lg"
                                        radius="md"
                                        withBorder
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: selectedPlants.includes(plant.id) ? '#e6ffe6' : 'white',
                                        }}
                                        onClick={() => togglePlant(plant.id)}
                                    >
                                        <Text className="text-center break-words">
                                            #{plant.id} {plant.name}
                                        </Text>
                                    </Card>
                                ))}
                            </SimpleGrid>
                        </Box>

                        <NumberInput label="Number of Persons" min={1} {...form.getInputProps('personNumber')} />

                        <Box>
                            <Title order={4} mb="sm">
                                Parcels
                            </Title>
                            <p style={{ color: 'red' }}>{form.errors.parcelInM2}</p>

                            {form.values.parcels.map((parcel, index) => (
                                <Box
                                    key={parcel.id}
                                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
                                >
                                    <NumberInput
                                        label={`Parcel ${index + 1} (m²)`}
                                        min={1}
                                        value={parcel.size}
                                        style={{ flexGrow: 1, marginRight: '10px' }}
                                        onChange={(val) => form.setFieldValue(`parcels.${index}.size`, val)}
                                        error={
                                            form.errors.parcelInM2 &&
                                            (parcel.size <= 0 ? 'Parcel size must be greater than 0' : null)
                                        }
                                    />
                                    {form.values.parcels.length > 1 && (
                                        <Button color="red" onClick={() => removeParcel(index)}>
                                            Remove
                                        </Button>
                                    )}
                                </Box>
                            ))}
                            <Button onClick={addParcel} mt="sm">
                                Add Parcel
                            </Button>
                        </Box>
                        <Select
                            label="Algorithm"
                            placeholder="Select an algorithm"
                            data={['glouton']}
                            {...form.getInputProps('algorithm')}
                        />
                        <Button
                            type="submit"
                            loading={plantsLoading === 'pending'}
                            fullWidth
                            data-testid="button-submit-form"
                        >
                            Confirm
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </div>
    );
};
