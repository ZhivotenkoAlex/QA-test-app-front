const BASE_URL = 'http://localhost:3000';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchMembers() {
    return fetchWithErrorHandling(`${BASE_URL}/contacts`);
}