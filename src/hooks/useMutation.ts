import { useState } from 'react';

export const useMutation = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | { message: string }>(null);

  const mutationFunction = async <T>(body: T) => {
    return new Promise(async (res, rej) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        if (!response.ok) {
          const { message } = await response.json();
          setError({ message });
          rej({ message });
        }
        res(response);
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  };

  return { loading, error, mutationFunction };
};
