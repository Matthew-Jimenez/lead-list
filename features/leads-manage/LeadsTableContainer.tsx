'use client';

import { memo, useState } from 'react';
import { useLeads } from '../../app/api/leads/queries';
import EnhancedTable from './LeadsTableComponent';
import { useUpdateLead } from '../../app/api/leads/[id]/mutation';

const LeadsTableContainer = () => {
    const [page, setPage] = useState(0);

    const { data, isLoading } = useLeads();


    const { mutate } = useUpdateLead();

    const handleReachout = (id: number) => {
        const currentState = data?.find((lead) => lead.id === id)?.status;

        mutate({ id, status: currentState === 'PENDING' ? 'REACHED_OUT' : 'PENDING' });
    };


    if (isLoading) {
        return <p>Loading...</p>;
    }

    console.log('data', data);

    return (
        <EnhancedTable leads={data} page={page} setPage={setPage} onToggleReachout={handleReachout} />
    );
};

export default memo(LeadsTableContainer);