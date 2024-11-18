import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
    // Parse the credentials from the environment variable
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || "{}");

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const sheetId = "1jyGLdSGGv9A3wqJUiU0HkOAr3QtX_A56bDs9TfKHZxo"; // Replace with your spreadsheet ID
    const range = "Sheet1!A:E"; // Adjust the range to match your spreadsheet

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });

    const rows = response.data.values || [];

    // Format data into objects
    const guestList = rows.slice(1).map((row) => ({
      name: row[0] || "N/A",
      email: row[1] || "N/A",
      attending: row[2] || "N/A",
      additionalpeople: row[3] || "N/A",
      pickuprequired: row[4] || "N/A",
    }));

    return NextResponse.json(guestList);
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
