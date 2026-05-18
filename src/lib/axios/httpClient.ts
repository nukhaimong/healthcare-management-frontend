import axios from 'axios';

const BASE_API_URL = process.env.BASE_API_PUBLIC_URL;

if (!BASE_API_URL) {
  throw new Error('BASE_API_PUBLIC_URL is not defined');
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

const httpGet = async (endpoint: string, options?: ApiRequestOptions) => {
  try {
    const response = await axiosInstance().get(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response;
  } catch (error) {
    console.error(`Get request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPost = async (
  endpoint: string,
  data: unknown,
  options?: ApiRequestOptions,
) => {
  try {
    const response = await axiosInstance().post(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response;
  } catch (error) {
    console.error(`Post request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPut = async (
  endpoint: string,
  data: unknown,
  options?: ApiRequestOptions,
) => {
  try {
    const response = await axiosInstance().put(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response;
  } catch (error) {
    console.error(`Put request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpPatch = async (
  endpoint: string,
  data: unknown,
  options?: ApiRequestOptions,
) => {
  try {
    const response = await axiosInstance().patch(endpoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response;
  } catch (error) {
    console.error(`Patch request to ${endpoint} failed:`, error);
    throw error;
  }
};

const httpDelete = async (endpoint: string, options?: ApiRequestOptions) => {
  try {
    const response = await axiosInstance().delete(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response;
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
