import { NextResponse } from "next/server";
import { getRegisteredEmails } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const registered = await getRegisteredEmails();
    const isRegistered = registered.includes(email.toLowerCase().trim());

    if (!isRegistered) {
      return NextResponse.json({ isRegistered: false, message: "Not registered!" });
    }

    return NextResponse.json({ isRegistered: true });
  } catch (error: any) {
    console.error("Error checking registration:", error);
    return NextResponse.json({ isRegistered: false, message: "Server error" }, { status: 500 });
  }
}
