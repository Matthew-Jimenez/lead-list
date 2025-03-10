import { Typography } from "@mui/material";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



export default async function AdminSignUp() {

    async function signUpNewUser(formData: FormData) {
        'use server';

        const supabase = await createClient();

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const { data } = await supabase.auth.signUp({
            email,
            password,
            // options: {
            //     emailRedirectTo: 'https://example.com/welcome',
            // },
        });

        if (data) {
            return redirect('/admin');
        }

        return revalidatePath('/admin/sign-up');
    }


    return (
        <>
            <Typography>Sign Up</Typography>

            <form action={signUpNewUser}>
                <input type="email" id="email" name="email" required />
                <input type="password" id="password" name="password" required />
                <button>Submit</button>
            </form>
        </>
    );
}