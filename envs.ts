const getEnv = (key: string, ignoreNull = false): string => {
    const val = process.env[key];

    if (!val && !ignoreNull) {
        throw new Error(`Missing env var: ${key}`);
    }

    return val || '';
};

export const LEAD_RESUME_READ_WRITE_TOKEN = getEnv('LEAD_RESUME_READ_WRITE_TOKEN');
export const SUPABASE_URL = getEnv('SUPABASE_SUPABASE_URL');
export const SUPABASE_ANON_KEY = getEnv('SUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY');