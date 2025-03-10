import { put } from "@vercel/blob";
import { LEAD_RESUME_READ_WRITE_TOKEN } from "../../envs";
import { createClient } from "../../libs/supabase/server";
import { Box, Button, OutlinedInput } from "@mui/material";
import InputFileUpload from "./InputFileUpload";
import { revalidatePath } from "next/cache";


const LeadFormContainer = () => {
    async function submitLead(formData: FormData) {
        'use server';
        const supabase = await createClient();

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;


        const imageFile = formData.get('resume') as File;

        let blob;

        if (imageFile?.name && imageFile?.size) {
            blob = await put(imageFile.name, imageFile, {
                access: 'public',
                token: LEAD_RESUME_READ_WRITE_TOKEN,
            });
        }

        await supabase
            .from('lead')
            .insert([
                { firstName, lastName, email, resumeUrl: blob ? blob.url : '' },
            ])
            .select();

        revalidatePath('/');
    }

    return (
        <form style={{ width: '100%', display: 'flex', justifyContent: 'center' }} action={submitLead}>
            <Box sx={{
                display: 'flex', flexDirection: 'column', maxWidth: 500, width: '100%', '& > *': {
                    marginTop: 2,
                }
            }}>

                <OutlinedInput fullWidth type="text" id="firstName" name="firstName" required placeholder="First Name" />
                <OutlinedInput fullWidth type="text" id="lastName" name="lastName" placeholder="Last Name" />
                <OutlinedInput fullWidth type="text" id="email" name="email" required placeholder="Email" />

                <Box>
                    <InputFileUpload
                        id="resume" name="resume"
                    />
                </Box>


                <Box width={'100%'}>
                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            backgroundColor: '#333',
                            ':hover': {
                                backgroundColor: '#000',
                            }
                        }} variant="contained" disableElevation>Submit</Button>
                </Box>
            </Box>
        </form>
    );
};


export default LeadFormContainer;