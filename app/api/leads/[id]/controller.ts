import { createClient } from "@/libs/supabase/server";

export const updateLeadController = async (id: string, status: string): Promise<Lead[]> => {
    const supabase = await createClient();

    const user = await supabase.auth.getUser();

    if (!user.data) {
        throw new Error('User not found');
    }

    const { data } = await supabase
        .from('lead')
        .update({ status })
        .eq('id', id)
        .select();

    return data as Lead[];
};