const getHost = (): string =>
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const buildApiUrl = (endpoint: string): string => {
    return `${getHost()}${endpoint}`;
};

export const fetchJson = async <T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> => {
    const url = buildApiUrl(endpoint);
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Error fetching ${url}: ${res.statusText}`);
    }

    return res.json();
};