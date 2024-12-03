/* eslint-disable @typescript-eslint/no-explicit-any */
export function throttle(fn: (...args: any[]) => void, delay = 500) {
  let last = 0;
  let id: number | null = null;
  let lastArgs: any[];
  return (...args: any[]) => {
    const now = Date.now();

    if (now - last > delay) {
      fn(...args);
      last = now;
    } else {
      lastArgs = args;
      if (!id) {
        id = setTimeout(() => {
          fn(...lastArgs);
          id = null;
          last = Date.now();
        }, delay - (now - last));
      }
    }
  };
}

export const makeUrlWithParams = (url: string, params: Record<string, string>) => {
  const paramsString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`)
    .join('&');
  return `${url}?${paramsString}`;
};

export function debounce(fn: (...args: any[]) => void, delay = 500) {
  let id: number;
  return function (...args: any[]) {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
