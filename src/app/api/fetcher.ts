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
    try {
      let [url, config] = props;
      if (interceptors?.request) {
        [url, config] = await interceptors.request(props);
      }

      let fetchHeaders = {
        ...headers,
        ...(config?.headers || {}),
      };

      if (config?.body && typeof config.body === 'object') {
        if (!(config.body instanceof FormData)) {
          config.body = JSON.stringify(config.body);
        } else {
          fetchHeaders = {};
        }
      }
      const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
      let response = await fetch(fullUrl, {
        ...(config as RequestInit),
        headers: fetchHeaders,
      });
      if (interceptors?.response) {
        response = await interceptors.response(response);
      }
      return { ok: true, body: await response.json() };
    } catch (error) {
      let message = '';
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return { ok: false, body: { message } };
    }
  };
};
