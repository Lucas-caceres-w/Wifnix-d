import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("tokenUser").value;
  //console.log(jwt);
  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("secret")
    );
    //console.log(payload);
    if (!payload || payload.rol !== "admin") {
      // Verifica si el rol del usuario es 'admin'
      return NextResponse.redirect(new URL("/", request.url)); // Si no es admin, redirige a la página principal
    }
    return NextResponse.next();
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
