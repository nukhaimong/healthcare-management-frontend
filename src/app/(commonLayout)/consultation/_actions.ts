//'use server'; this is already server action

import { httpClient } from '@/lib/axios/httpClient';

export const getDoctors = async () => {
  const doctors = await httpClient.get('/doctors');
  return doctors;
};
