import axios, { AxiosError } from 'axios';

const request = axios.create({
  baseURL: 'http://192.168.0.220:3333',
  headers: { 'Content-Type': 'application/json' },
});

export const getGamelist = async () => {
  try {
    const { data } = await request.get('/games');
    return data;
  } catch (error: any) {
    throw new AxiosError(error);
  }
};
