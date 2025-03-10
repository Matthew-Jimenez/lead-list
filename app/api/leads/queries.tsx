import { QueryClient, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getLeads } from "./client";

const queryConfig: UseQueryOptions<Lead[]> = {
    queryKey: ['leads'],
    queryFn: async () => {
        return await getLeads();
    },
    staleTime: 1000 * 60, // 1 minute
};

export const prefetchLeads = async (queryClient: QueryClient) => {
    queryClient.prefetchQuery(queryConfig);
};

export const useLeads = () => {
    return useQuery(queryConfig);
};