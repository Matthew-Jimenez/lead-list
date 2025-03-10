
import { Button, Typography } from "@mui/material";
import { createClient } from "../../libs/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import LeadsTableContainer from "../../features/leads-manage/LeadsTableContainer";

export default async function AdminDashboard() {
    // const queryClient = new QueryClient();

    // ensure user is signed in
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser().then((res) => {
        return res;
    });

    if (error || !data?.user) {
        redirect('/admin/sign-in');
    }
    // can not prefetch here because browser cookies have not yet been set
    // will have to thing of another way to solve
    // https://supabase.com/docs/guides/auth/server-side/advanced-guide FAQ
    // prefetchLeads(queryClient);

    async function signOut() {
        'use server';
        const client = await createClient();

        await client.auth.signOut();

        revalidatePath('/admin');
    }

    return (
        <>
            <Typography>Welcome to dashboard</Typography>

            <LeadsTableContainer />

            <Button onClick={signOut} >
                Sign Out
            </Button>
        </>
    );
}


