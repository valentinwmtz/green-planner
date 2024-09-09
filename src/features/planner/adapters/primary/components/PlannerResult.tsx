import { Badge, Button, Card, Grid, Group, Text, Title } from '@mantine/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store.ts';
import { ASKED_TO_GENERATE_PARCEL } from '../../../actions/plannerActions.ts';
import { Parcel } from '../../../core-logic/entities/Parcel';

interface PlannerResultProps {
    parcels: readonly Parcel[];
}

export const PlannerResult: React.FC<PlannerResultProps> = ({ parcels }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleRetry = () => {
        dispatch(ASKED_TO_GENERATE_PARCEL());
    };

    return (
        <div className="m-6">
            <Title order={2} mb="xl">
                Optimized Garden Plan
            </Title>
            <Grid gutter="md">
                {parcels.map((parcel, index) => (
                    <Grid.Col key={parcel.id}>
                        <Card shadow="sm" radius="md" withBorder>
                            <Title order={4} mb="md">
                                Parcel {index + 1}
                            </Title>
                            <Text size="sm" mb="md">
                                Size: {parcel.sizeInSquareMeters} m²
                            </Text>
                            <Group>
                                <Text>Plants:</Text>
                                {parcel.plants.length > 0 ? (
                                    parcel.plants.map((plant) => (
                                        <Badge key={plant.id} variant="outline" size="lg">
                                            {plant.name}
                                        </Badge>
                                    ))
                                ) : (
                                    <Text size="sm">No plants assigned</Text>
                                )}
                            </Group>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
            <Button mt="xl" onClick={handleRetry} fullWidth>
                Retry
            </Button>
        </div>
    );
};
