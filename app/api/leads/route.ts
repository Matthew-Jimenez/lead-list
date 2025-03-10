import { NextResponse } from 'next/server';
import { leadsController } from './controller';
import { createClient } from '../../../libs/supabase/server';


export const GET = async function handler() {
    try {
        const supabase = await createClient();

        const user = await supabase.auth.getUser();


        if (!user.data.user) {
            throw new Error('User not found');
        }

        const res = await leadsController();

        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
};


export const PUT = async function handler() {
    try {
        const supabase = await createClient();

        const user = await supabase.auth.getUser();

        if (!user.data.user) {
            throw new Error('User not found');
        }

        const res = await leadsController();

        return NextResponse.json(res);

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
};
