type Lead = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    resumeUrl: string;
    created_at: string;
    status: 'PENDING' | 'REACHED_OUT';
};