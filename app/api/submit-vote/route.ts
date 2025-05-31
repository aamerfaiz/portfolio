import { NextResponse } from "next/server";
import { hasVoted, submitVote } from "@/lib/googleSheets";

export async function POST(req: Request) {
    try {
      const { email, candidateId, candidateName } = await req.json();
  
      if (!email || !candidateId || !candidateName) {
        return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
      }
  
      const normalizedEmail = email.toLowerCase();
  
      console.log("Checking if already voted...");
      const alreadyVoted = await hasVoted(normalizedEmail);
  
      if (alreadyVoted) {
        return NextResponse.json({ success: false, message: "Already voted" }, { status: 400 });
      }
  
      console.log("Submitting vote...");
      await submitVote(normalizedEmail, candidateId, candidateName);
  
      return NextResponse.json({ success: true });
    } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("API Error:", error.message);
        } else {
          console.error("API Error:", error);
        }
      
        return NextResponse.json(
          { success: false, message: "Server error" },
          { status: 500 }
        );
      }
      
  }
  