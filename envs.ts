const getEnv = (key: string, ignoreNull = false): string => {
    const val = process.env[key];

    if (!val && !ignoreNull) {
        throw new Error(`Missing env var: ${key}`);
    }

    return val || '';
};

export const LEAD_RESUME_READ_WRITE_TOKEN = getEnv('LEAD_RESUME_READ_WRITE_TOKEN');