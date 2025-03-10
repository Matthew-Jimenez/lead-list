import { fetchJson } from "../utils";

export const getLeads = async () => {
    return fetchJson<Lead[]>(
        `/api/leads`
    );
};


export const updateLead = async (id: number, status: 'PENDING' | 'REACHED_OUT') => {
    return fetchJson<Lead>(
        `/api/leads/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify({ status })
        }
    );
};