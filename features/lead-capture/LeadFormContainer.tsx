import { put } from "@vercel/blob";
import { LEAD_RESUME_READ_WRITE_TOKEN } from "../../envs";
import { redirect } from "next/navigation";
import { createClient } from "../../libs/supabase/server";

const LeadFormContainer = () => {
    async function submitLead(formData: FormData) {
        'use server';
        const supabase = await createClient();

        const firstName = formData.get('firstName') as File;

        console.log('firstName', firstName);

        const imageFile = formData.get('resume') as File;

        let blob;

        if (!imageFile?.name) {
            blob = await put(imageFile.name, imageFile, {
                access: 'public',
                token: LEAD_RESUME_READ_WRITE_TOKEN,
            });
        }


        const { data, error } = await supabase
            .from('lead')
            .insert([
                { firstName: firstName, resumeUrl: blob ? blob.url : '' },
            ])
            .select();

        redirect('/success');
    }

    return (
        <form action={submitLead}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="resume">Image</label>
            <input type="file" id="resume" name="resume" />
            <button>Submit</button>
        </form>
    );
};


export default LeadFormContainer;