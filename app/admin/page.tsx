
import { Button, Typography } from "@mui/material";
import { createClient } from "../../libs/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function AdminDashboard() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect('/admin/sign-in');
    }

    async function signOut() {
        'use server';
        const client = await createClient();

        await client.auth.signOut();

        revalidatePath('/admin');
    }

    return (
        <>
            <Typography>Welcome to dashboard</Typography>

            <Button onClick={signOut} >
                Sign Out
            </Button>
        </>
    );
}