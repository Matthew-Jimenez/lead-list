// import LeadFormComponent from "./LeadFormComponent";

import { put } from "@vercel/blob";
import { LEAD_RESUME_READ_WRITE_TOKEN } from "../../envs";
import { redirect } from "next/navigation";

const LeadFormContainer = () => {

    async function submitLead(formData: FormData) {
        'use server';
        const firstName = formData.get('firstName') as File;

        console.log('firstName', firstName);

        const imageFile = formData.get('resume') as File;

        const blob = await put(imageFile.name, imageFile, {
            access: 'public',
            token: LEAD_RESUME_READ_WRITE_TOKEN,
        });

        redirect('/success');
    }

    return (
        <form action={submitLead}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="resume">Image</label>
            <input type="file" id="resume" name="resume" required />
            <button>Submit</button>
        </form>
    );
};


export default LeadFormContainer;