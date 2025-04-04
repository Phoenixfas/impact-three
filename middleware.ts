import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    let token;
    const jwtSecret = process.env.JWT_SECRET_ADMIN || '';
    const securedPostRoutes = ['/api/administrator', '/api/news', '/api/newsletter', '/api/partners', '/api/speakers'];
    const securedGetRoutes = ['/api/administrator/me', '/api/subscribers', '/api/visitors'];
    const securedPutRoutes = ['/api/exhibitors', '/api/news', '/api/partners', '/api/profile', '/api/speakers', '/api/sponsors']
    const securedDeleteRoutes = ['/api/exhibitors', '/api/news', '/api/partners', '/api/speakers', '/api/sponsors', '/api/subscribers', '/api/visitors']
    const excludedRoutes = ['/api/administrator/login', '/api/message', '/api/generateIdea']
    
    try{
        const authorization = (await headers()).get('authorization');
        
        // Exclude routes
        if (excludedRoutes.includes(pathname)) {
            return NextResponse.next();
        }
        // Secure POST routes
        if (securedPostRoutes.some(route => pathname.startsWith(route))) {
            if (request.method === 'POST') {
                if (authorization && authorization.startsWith('Bearer')) {
                    try {
                        token = authorization.split(' ')[1]; // Extract the token from the 'Bearer' scheme
                        if (token) {
                            if (jwtSecret === '') {
                                throw new Error('JWT_SECRET_ADMIN is not defined');
                            }

                            // Verify the JWT
                            const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));
                            const admin = (payload as { admin: { id: string } }).admin.id;
                            const response = NextResponse.next();
                            response.headers.set('admin', admin);
                            
                            return response;
                        } else {
                            return new NextResponse('Unauthorized', { status: 401 });
                        }
                    } catch (error) {
                        return new NextResponse('Unauthorized', { status: 401 });
                    }
                }

                if (!token) {
                    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
                }
            }
        }
        
        // Secure GET routes
        if (securedGetRoutes.some(route => pathname.startsWith(route))) {
            if (request.method === 'GET') {
                if (authorization && authorization.startsWith('Bearer')) {
                    try {
                        token = authorization.split(' ')[1]; // Extract the token from the 'Bearer' scheme
                        if (token) {
                            if (jwtSecret === '') {
                                throw new Error('JWT_SECRET_ADMIN is not defined');
                            }

                            // Verify the JWT
                            const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));
                            const admin = (payload as { admin: { id: string } }).admin.id;
                            const response = NextResponse.next();
                            response.headers.set('admin', admin);
                            
                            return response;
                        } else {
                            return new NextResponse('Unauthorized', { status: 401 });
                        }
                    } catch (error) {
                        return new NextResponse('Unauthorized', { status: 401 });
                    }
                }

                if (!token) {
                    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
                }
            }
        }
        
        // Secure PUT routes
        if (securedPutRoutes.some(route => pathname.startsWith(route))) {
            if (request.method === 'PUT') {
                if (authorization && authorization.startsWith('Bearer')) {
                    try {
                        token = authorization.split(' ')[1]; // Extract the token from the 'Bearer' scheme
                        if (token) {
                            if (jwtSecret === '') {
                                throw new Error('JWT_SECRET_ADMIN is not defined');
                            }

                            // Verify the JWT
                            const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));
                            const admin = (payload as { admin: { id: string } }).admin.id;
                            const response = NextResponse.next();
                            response.headers.set('admin', admin);
                            
                            return response;
                        } else {
                            return new NextResponse('Unauthorized', { status: 401 });
                        }
                    } catch (error) {
                        return new NextResponse('Unauthorized', { status: 401 });
                    }
                }

                if (!token) {
                    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
                }
            }
        }
        
        // Secure DELETE routes
        if (securedDeleteRoutes.some(route => pathname.startsWith(route))) {
            if (request.method === 'DELETE') {
                if (authorization && authorization.startsWith('Bearer')) {
                    try {
                        token = authorization.split(' ')[1]; // Extract the token from the 'Bearer' scheme
                        if (token) {
                            if (jwtSecret === '') {
                                throw new Error('JWT_SECRET_ADMIN is not defined');
                            }

                            // Verify the JWT
                            const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));
                            const admin = (payload as { admin: { id: string } }).admin.id;
                            const response = NextResponse.next();
                            response.headers.set('admin', admin);
                            
                            return response;
                        } else {
                            return new NextResponse('Unauthorized', { status: 401 });
                        }
                    } catch (error) {
                        return new NextResponse('Unauthorized', { status: 401 });
                    }
                }

                if (!token) {
                    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
                }
            }
        }

        return NextResponse.next();
    } catch (er) {
        console.log(er);
    }

}

export const config = {
    matcher: ['/api/:path*', '/((?!api/administrator/login).*)'],
};
