const isDev = process.env.NODE_ENV !== 'production';

const info = (...params: unknown[]): void => {
  if (isDev) {
    console.log(...params);
  }
};

const error = (...params: unknown[]): void => {
  if (isDev) {
    console.error(...params);
  }
};

export const logger = { info, error };
