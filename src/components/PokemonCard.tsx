import React from 'react';
import useSWR from 'swr';
import { Card, Grid, CardContent, CardHeader, Typography, SxProps, Theme } from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';
import { fetchDataByUrl } from '../utils/pokemonsHelpers';
import { IPokemonDetailsAPI } from '../../typings/PokemonAPI.types';
import { FakePokemonCard } from './FakePokemonCard';

const DEFAULT_WIDTH = '170px';

export interface IPokemonCardProps {
  name: string;
  url: string;
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({ name, url }) => {
  const { data, isLoading } = useSWR(url, (urlForFetch) => fetchDataByUrl<IPokemonDetailsAPI>(urlForFetch));

  const cardStyles: SxProps<Theme> = {
    maxWidth: 345,
    height: 345,
    backgroundColor: '#ECE515',
  };

  return isLoading ? (
    <FakePokemonCard />
  ) : (
    <Grid item md={2} sm={6} xs={12}>
      <Card sx={cardStyles}>
        <CardHeader avatar={<CatchingPokemon />} title={name} width={DEFAULT_WIDTH} />
        <CardContent sx={{ marginTop: 10 }}>
          <Typography variant="h5" width={DEFAULT_WIDTH}>
            Вес: {data?.weight} ед
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5" width={DEFAULT_WIDTH}>
            Рост: {data?.height} ед
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
