import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";
import { headers } from "next/headers";

export async function GET(request: Request) {
    try {
        await dbConnect();
        const h = await headers();
        const id = h.get('admin')
        // console.log(id);

        const admin = await Admin.findById(id);
        if (!admin) {
            return NextResponse.json({ msg: "Admin not found" }, { status: 404 });
        }

        return NextResponse.json({admin}, {status: 200});
    
    } catch (error: any) {
        return NextResponse.json({ msg: "Server Error", err: error.message }, { status: 500 });
    }
}