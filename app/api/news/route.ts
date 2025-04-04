import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import New from "@/models/New";
import { marked } from 'marked';

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const news = await New.find({});

        return NextResponse.json({
            success: true,
            data: news,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}

export async function POST(request: NextRequest) {
    await dbConnect();
    
    const { title, image, snippet, markdown } = await request.json();
    if (!title || !image || !snippet || !markdown) {
        return NextResponse.json({ 
            success: false,
            error: "Please fill all fields" 
        }, { status: 400 });
    } else {
        try {
            const sanitizedHtml = marked.parse(markdown);
            const article = await New.create({
                title,
                image,
                snippet,
                markdown,
                sanitizedHtml,
                date: Date.now(),
            });
            return NextResponse.json({ 
                success: true,
                data: article 
            }, { status: 201 });
        } catch (err) {
            console.log(err);
            return NextResponse.json({ 
                success: false,
                error: "News not created" 
            }, { status: 400 });
        }
    }
}