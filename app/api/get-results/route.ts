import { NextResponse } from "next/server";
import { getVotesFromSheet } from "@/lib/googleSheets";

export async function GET() {
  try {
    const voteCounts = await getVotesFromSheet();
    return NextResponse.json({ success: true, voteCounts });
  } catch (err) {
    console.error("Error getting votes:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
