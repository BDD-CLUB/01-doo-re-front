type AllowObjectBodyRequestInit = Omit<RequestInit, 'body'> & { body?: RequestInit['body'] | object | FormData };

export type FetchProps = [string, AllowObjectBodyRequestInit?];

export type FetcherOptions = {
  baseUrl?: string;
  headers?: HeadersInit;
  interceptors?: {
    request?: (config: FetchProps) => Promise<FetchProps> | FetchProps;
    response?: (response: Response) => Promise<Response> | Response;
  };
};

const defaultOptions: FetcherOptions = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
  interceptors: {
    request: async (config) => config,
    response: async (response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.statusText);
    },
  },
};

export const fetcher = (options?: FetcherOptions) => {
  const { baseUrl, headers, interceptors } = { ...defaultOptions, ...options };

  return async (...props: FetchProps) => {
    let [url, config] = props;
    if (interceptors?.request) {
      [url, config] = await interceptors.request(props);
    }
    if (config?.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    let response = await fetch(fullUrl, {
      ...(config as RequestInit),
      headers: {
        ...headers,
        ...(config?.headers || {}),
      },
    });
    if (interceptors?.response) {
      response = await interceptors.response(response);
    }
    return response.json();
  };
};
