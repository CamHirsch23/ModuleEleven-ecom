const API_BASE_URL = 'http://localhost:3000/api';

async function fetchData(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status} - ${await response.text()}`);
  }
  return response.json();
}

export const api = {
  get: (endpoint) => fetchData(endpoint),
  post: (endpoint, data) => fetchData(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint, data) => fetchData(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint) => fetchData(endpoint, { method: 'DELETE' }),
};