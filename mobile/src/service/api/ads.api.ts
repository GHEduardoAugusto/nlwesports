import axios, { AxiosError } from 'axios';

const request = axios.create({
  baseURL: 'http://192.168.0.220:3333',
  headers: { 'Content-Type': 'application/json' },
});

export const getAdslist = async (id: string) => {
  try {
    const { data } = await request.get(`/games/${id}/ads`);
    return data;
  } catch (error: any) {
    throw new AxiosError(error);
  }
};

export const getDiscord = async (adsId: string) => {
  try {
    const { data } = await request.get(`/ads/${adsId}/discord`);
    return data;
  } catch (error: any) {
    throw new AxiosError(error);
  }
};
