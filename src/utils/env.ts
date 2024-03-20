type Env = {
  API_URL: string;
  API_KEY: string;
};

const config: Env = {
  API_URL: 'https://api.themoviedb.org/3',
  API_KEY: '4c156479526550ee27faaf3ea7881789',
};
export const env = { ...config };
