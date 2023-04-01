import React from 'react';
import { Card, Grid, SxProps, Theme, Skeleton } from '@mui/material';

export const FakePokemonCard: React.FC = () => {
  const styles: SxProps<Theme> = {
    maxWidth: 345,
    height: 345,
    backgroundColor: '#ECE515',
  };

  return (
    <Grid item md={2} xs={12}>
      <Card sx={styles}>
        <Skeleton variant="rounded" width="100%" height="100%" />
      </Card>
    </Grid>
  );
};
