import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchJson } from "../../utils";


export const useUpdateLead = () => {
    const client = useQueryClient();

    return useMutation<Lead, null, { id: number, status: 'PENDING' | 'REACHED_OUT'; }>({
        mutationKey: ['update-lead'],
        mutationFn: async ({ id, status }) => {
            return fetchJson<Lead>(
                `/api/leads/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify({ status })
                }
            );
        },
        onSuccess: () => {
            client.refetchQueries({ queryKey: ['leads'] });
        }
    });
};