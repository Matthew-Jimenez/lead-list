'use client';

import { memo } from 'react';
import { useLeads } from '../../app/api/leads/queries';

const LeadsTableContainer = () => {
    const { data, isLoading } = useLeads();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <p>LeadsTableContainer</p>

            {data?.map(lead => (
                <div key={lead.firstName}>
                    {lead.firstName}
                </div>
            ))}
        </div>
    );
};

export default memo(LeadsTableContainer);