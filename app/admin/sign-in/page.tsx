import { Typography } from "@mui/material";
import { createClient } from "../../../libs/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminSignIn() {
    async function signUpNewUser(formData: FormData) {
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

        return redirect('/admin');
    }

    return (
        <>
            <Typography>Sign In</Typography>

            <form action={signUpNewUser}>
                <input type="email" id="email" name="email" required />
                <input type="password" id="password" name="password" required />
                <button>Submit</button>
            </form>
        </>
    );
}