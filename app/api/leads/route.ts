import { NextRequest, NextResponse } from 'next/server';
import { leadsController } from './controller';

export const GET = async function handler(request: NextRequest) {
    try {
        const res = await leadsController();

        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}

