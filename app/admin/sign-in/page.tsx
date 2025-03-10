import { Typography } from "@mui/material";
import { createClient } from "../../../libs/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function AdminSignIn() {
    async function signIn(formData: FormData) {
        'use server';

        const supabase = await createClient();

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (!data.session || error) {
            throw new Error(error?.code || 'Unknown error');
        }

        revalidatePath('/admin', 'layout');
        redirect('/admin');
    }

    return (
        <>
            <Typography>Sign In</Typography>

            <form action={signIn}>
                <input type="email" id="email" name="email" required />
                <input type="password" id="password" name="password" required />
                <button>Submit</button>
            </form>
        </>
    );
}