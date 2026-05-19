import { ApiResponse } from '@/app/types/api.types';
import axios from 'axios';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!BASE_API_URL) {
  throw new Error('NEXT_PUBLIC_BASE_API_URL is not defined');
}

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
};

export interface ApiRequestOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const httpGet = async <TData>(
  endpoint: string,
  options?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = axiosInstance();
    const response = await instance.get<ApiResponse<TData>>(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Get request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPost = async <TData>(
  endpoint: string,
  data: unknown,
  options?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = axiosInstance();
    const response = await instance.post<ApiResponse<TData>>(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Post request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPut = async <TData>(
  endpoint: string,
  data: unknown,
  options?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = axiosInstance();
    const response = await instance.put<ApiResponse<TData>>(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Put request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPatch = async <TData>(
  endpoint: string,
  data: unknown,
  options?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = axiosInstance();
    const response = await instance.patch<ApiResponse<TData>>(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Patch request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpDelete = async <TData>(
  endpoint: string,
  options?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = axiosInstance();
    const response = await instance.delete<ApiResponse<TData>>(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Delete request to ${endpoint} failed:`, error);
    throw error;
  }
};

export const httpClient = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  patch: httpPatch,
  delete: httpDelete,
};
