import React from 'react';
import useSWR from 'swr';
import { Container, Grid, Pagination, SxProps, Theme, Typography, Alert } from '@mui/material';
import { IPokemonsMainDataAPI } from '../../typings/PokemonAPI.types';
import { fetchDataByUrl, getPageCount } from '../utils/pokemonsHelpers';
import { PokemonCard } from './PokemonCard';
import { FakePokemonCard } from './FakePokemonCard';

export const PokemonView: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  const maxPokemonsOnPage = 12;
  const loadToCount = maxPokemonsOnPage * (page - 1);
  const onPagingChange = (_, newPage: number): void => setPage(newPage);
  const urlForLoading = `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemonsOnPage}&offset=${loadToCount}`;

  const { data, isLoading, error } = useSWR(urlForLoading, (url) => fetchDataByUrl<IPokemonsMainDataAPI>(url));

  const topContainerStyles: SxProps<Theme> = {
    padding: '40px',
    maxWidth: '1920px',
    width: '100%',
    margin: 0,
    minHeight: '820px',
    height: '100%',
  };
  const topContainerContent = isPageLoading
    ? new Array(maxPokemonsOnPage).fill('').map(() => <FakePokemonCard />)
    : data?.results.map((item) => <PokemonCard {...item} key={item.name} />);

  const bottomContainerStyles: SxProps<Theme> = { display: 'flex', justifyContent: 'center' };
  const bottomContainerContent = isPageLoading ? (
    <Typography variant="h6" align="center">
      Вызываем покемонов из покеболов...
    </Typography>
  ) : (
    <Pagination page={page} count={getPageCount(data?.count)} onChange={onPagingChange} />
  );

  React.useEffect(() => {
    if (isLoading) {
      setIsPageLoading(true);
      setTimeout((): void => setIsPageLoading(false), 500);
    }
  }, [isLoading]);

  return (
    <Container maxWidth={false}>
      {error && <Alert severity="error">Что-то пошло не так...</Alert>}
      <Container maxWidth={false} sx={topContainerStyles}>
        <Grid container spacing={6}>
          {topContainerContent}
        </Grid>
      </Container>
      <Container sx={bottomContainerStyles}>{bottomContainerContent}</Container>
    </Container>
  );
};
