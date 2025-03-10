import { createClient } from "../../../libs/supabase/server";

export const leadsController = async (): Promise<Lead[]> => {
    const supabase = await createClient();

    const user = await supabase.auth.getUser();

    if (!user.data) {
        throw new Error('User not found');
    }


    console.log('user', user.data);

    const leads = await supabase.from<'lead', Lead[]>('lead').select('*');


    return leads.data as Lead[];
};