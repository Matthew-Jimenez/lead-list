import { fetchJson } from "../utils";

export const getLeads = async () => {
    return fetchJson<Lead[]>(
        `/api/leads`
    );
};
