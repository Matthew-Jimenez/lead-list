'use client';

import { memo, useState } from 'react';
import { useLeads } from '../../app/api/leads/queries';
import EnhancedTable from './LeadsTableComponent';

const LeadsTableContainer = () => {
    const [page, setPage] = useState(0);

    const { data, isLoading } = useLeads();


    const handleReachout = (id: number) => {
        alert('reachout');
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