'use client';

import { memo, useState } from 'react';
import { useLeads } from '../../app/api/leads/queries';
import EnhancedTable from './LeadsTableComponent';

const LeadsTableContainer = () => {
    const [page, setPage] = useState(0);

    const { data, isLoading } = useLeads();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <EnhancedTable leads={data} page={page} setPage={setPage} />
    );
};

export default memo(LeadsTableContainer);