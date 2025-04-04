import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const jwtSecret: any = process.env.JWT_SECRET_ADMIN

export async function POST(request: NextRequest) {
    await dbConnect();
    const { email, password } = await request.json();

    const admin = await Admin.findOne({ email });
    if (!admin) {
        return NextResponse.json({
            success: false,
            msg: "Invalid Credentials",
        }, { status: 400 });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return NextResponse.json({
            success: false,
            msg: "Invalid Password",
        }, { status: 400 });
    }
    return NextResponse.json({
        success: true,
        token: generateToken(admin.id),
        msg: "Admin Logged In Successfully"
    }, { status: 200 });
}

// generate token
const generateToken = (id: any) => {
    const payload = {
        admin: {
            id: id,
        },
    };
    return jwt.sign(payload, jwtSecret, { expiresIn: 360000 });
}
