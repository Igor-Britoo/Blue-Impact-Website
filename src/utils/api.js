const API_URL = import.meta.env.VITE_API_URL;
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const createHeaders = (customHeaders = {}) => ({
    'Content-Type': 'application/json',
    'Authorization': `Token ${BEARER_TOKEN}`,
    ...customHeaders,
});

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
};

export const fetchData = async (endpoint, options = {}) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: createHeaders(options.headers),
        ...options,
    });
    return handleResponse(response);
};

export const postData = async (endpoint, data, options = {}) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: createHeaders(options.headers),
        ...options,
    });
    return handleResponse(response);
};
