// lib/hooks/useApi.js

import { useState, useCallback } from 'react';
import { getIdToken, refreshIdToken } from "@/components/functions/tokenService";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const callApi = useCallback(async (endpoint, method = 'GET', body = null, requiresAuth = false) => {
    setIsLoading(true);
    setApiError(null);

    const headers = {
      'Content-Type': 'application/json',
    };

    if (requiresAuth) {
      headers.token = getIdToken();
    }

    try {
      const response = await fetch(endpoint, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      if (response.status === 401 && requiresAuth) {
        const newToken = await refreshIdToken();
        if (newToken) {
          headers.token = newToken;
          return callApi(endpoint, method, body, requiresAuth);
        } else {
          throw new Error("Failed to refresh token");
        }
      }

      const data = await response.json();

      if (data.isSuccess && data.data) {
        setIsLoading(false);
        return data.data;
      } else {
        throw new Error(data.message || "API call failed");
      }
    } catch (error) {
      setApiError(error.message);
      setIsLoading(false);
      throw error;
    }
  }, []);

  return { isLoading, apiError, callApi };
};

export default useApi;