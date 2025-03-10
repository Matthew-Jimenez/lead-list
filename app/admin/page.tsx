
import { Button, Typography } from "@mui/material";
import { createClient } from "../../libs/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { prefetchLeads } from "../api/leads/queries";
import LeadsTableContainer from "../../features/leads-manage/LeadsTableContainer";

export default async function AdminDashboard() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect('/admin/sign-in');
    }

    const queryClient = new QueryClient();

    prefetchLeads(queryClient);

    async function signOut() {
        'use server';
        const client = await createClient();

        await client.auth.signOut();

        revalidatePath('/admin');
    }

    return (
        <>
            <Typography>Welcome to dashboard</Typography>

            <HydrationBoundary state={dehydrate(queryClient, hydrationOptions)} >
                <LeadsTableContainer />
            </HydrationBoundary>

            <Button onClick={signOut} >
                Sign Out
            </Button>
        </>
    );
}

const hydrationOptions = {
    shouldDehydrateQuery: () => true,
};
