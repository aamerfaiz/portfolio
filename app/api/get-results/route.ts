import { NextResponse } from "next/server";
import { getVotesFromSheet } from "@/lib/googleSheets";
export const dynamic = "force-dynamic"; // Next.js 13+ app router

export async function GET() {
  try {
    const voteCounts = await getVotesFromSheet();
    return NextResponse.json({ success: true, voteCounts });
  } catch (err) {
    console.error("Error getting votes:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
