type Env = {
  API_URL: string;
  API_KEY: string;
  API_ACCESS_TOKEN: string;
  TIMEOUT: number;
};

const config: Env = {
  API_URL: 'https://api.themoviedb.org/3',
  API_KEY: '4c156479526550ee27faaf3ea7881789',
  API_ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzE1NjQ3OTUyNjU1MGVlMjdmYWFmM2VhNzg4MTc4OSIsInN1YiI6IjY1ZmIxMmE3MGJjNTI5MDE0OWFkYzE4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gy3sxizoz3hWO901z2sOcEIUCluEmBQDvJxcCy7gQw4',
  TIMEOUT: 300000,
};
export const env = { ...config };
