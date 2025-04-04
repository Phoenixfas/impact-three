import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { headers } from "next/headers";

const jwtSecret: any = process.env.JWT_SECRET_ADMIN


export async function POST(request: NextRequest) {
    await dbConnect();
    const { name, email, password } = await request.json();

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
        return NextResponse.json({msg: "Admin already exists"}, {status: 400});
    }
    const salt = await bcrypt.genSalt();
    const hashedPasswrd = await bcrypt.hash(password, salt);

    // create new admin
    const admin = await Admin.create({
        name,
        email,
        password: hashedPasswrd,
    });

    return NextResponse.json({
        success: true,
        token: generateToken(admin.id),
        msg: "Admin Created Successfully"
    }, {status: 201});
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
