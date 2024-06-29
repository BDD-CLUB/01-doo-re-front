/* eslint-disable import/prefer-default-export */
import { fetcher } from './fetcher';

const gardenFetcher = fetcher();

const getGarden = (teamId: number) => gardenFetcher(`/garden/${teamId}`);

export { getGarden };
