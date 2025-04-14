import axios, { AxiosInstance, AxiosError } from 'axios';

// Read base URL from environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL as string;

if (!baseURL) {
  // Warn if the environment variable is not set
  console.warn('VITE_API_BASE_URL is not defined. API requests may fail.');
}

// Create an Axios instance with the base URL
const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000, // 10 seconds timeout
});

// Basic error handling interceptor
apiClient.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    // Log error details
    console.error('API Error:', error.message, error.response?.data || '');
    // Optionally, rethrow or handle error globally
    return Promise.reject(error);
  }
);

// Placeholder: Fetch project data
export async function getProjects() {
  console.log('getProjects() called - returning mock data');
  // Example mock data
  return [
    { id: 1, name: 'Randomhack Portal', description: 'Demo project' },
    { id: 2, name: 'Home Lab', description: 'Personal infrastructure' },
  ];
}

// Placeholder: Fetch CV information
export async function getCVData() {
  console.log('getCVData() called - returning mock data');
  // Example mock data
  return {
    name: 'John Doe',
    title: 'Software Engineer',
    skills: ['TypeScript', 'React', 'DevOps'],
  };
}

// Placeholder: Fetch home lab details
export async function getHomeLabInfo() {
  console.log('getHomeLabInfo() called - returning mock data');
  // Example mock data
  return {
    servers: 3,
    services: ['NAS', 'Kubernetes', 'Home Assistant'],
  };
}

// Export the configured Axios instance for custom requests if needed
export default apiClient;