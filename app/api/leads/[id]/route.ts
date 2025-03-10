import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../../libs/supabase/server';
import { updateLeadController } from './controller';


export const PUT = async function handler({ json }: NextRequest, { params }: { params: Promise<{ id: string; }>; }) {
    const id = await params.then((p) => p.id);

    try {
        const body = await json();
        const { status } = body;

        const supabase = await createClient();
        const user = await supabase.auth.getUser();

        if (!user.data.user) {
            throw new Error('User not found');
        }

        const res = await updateLeadController(id, status);

        return NextResponse.json(res);

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
};
