import { google } from "googleapis";

const sheets = google.sheets("v4");

// Setup Google Auth using env variables
const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  undefined,
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

// Use separate Sheet IDs from .env
const VOTING_SHEET_ID = process.env.VOTING_SHEET_ID!;
const REGISTERED_USERS_SHEET_ID = process.env.REGISTERED_USERS_SHEET_ID!;

// Sheet names
const VOTE_SHEET = "Voting";

// Fetch emails of registered users from registration sheet
export const getRegisteredEmails = async (): Promise<string[]> => {
  await auth.authorize();
  const res = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: REGISTERED_USERS_SHEET_ID,
    range: `Form Responses 1!B2:B`, // adjust 'Sheet1' to your actual tab name
  });
  

  return (res.data.values || []).map((e) => e[0].toLowerCase().trim());
};


// Check if the user has already voted
export const hasVoted = async (email: string): Promise<boolean> => {
  await auth.authorize();
  const res = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: VOTING_SHEET_ID,
    range: `${VOTE_SHEET}!A2:A`,
  });

  const votedEmails = (res.data.values || []).flat();
  return votedEmails.includes(email.toLowerCase());
};

// Submit vote to the voting sheet
export const submitVote = async (
  email: string,
  candidateId: number,
  candidateName: string
): Promise<void> => {
  try {
    await auth.authorize();

    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: VOTING_SHEET_ID, // ensure this is defined
      range: `${VOTE_SHEET}!A:C`, // ensure tab name matches
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, candidateId.toString(), candidateName]],
      },
    });

    console.log("Vote submitted successfully");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("submitVote error:", err.message);
    } else {
      console.error("submitVote error:", err);
    }
  
    throw err;
  }
  
};

