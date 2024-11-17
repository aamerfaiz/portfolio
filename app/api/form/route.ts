import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request): Promise<Response> {
  try {
    // Read the body and parse it as JSON
    const data = await request.json();

    if (
      typeof data !== 'object' ||
      data === null ||
      !('name' in data) ||
      !('email' in data) ||
      !('attending' in data) ||
      !('additionalpeople' in data) ||
      !('pickuprequired' in data)
    ) {
      return NextResponse.json({
        message: 'Invalid data format: expected valid fields in object.',
      });
    }

    // Load service account credentials
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS as string);

    // Set up the Google Sheets API client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1jyGLdSGGv9A3wqJUiU0HkOAr3QtX_A56bDs9TfKHZxo'; // Replace with your Google Sheet ID

    // Prepare the data for writing (assuming the data is an object)
    const values = [[
      data.name,
      data.email,
      data.attending,
      data.additionalpeople,
      data.pickuprequired,
    ]];

    // Append the new row to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E', // Adjust this range based on your sheet layout
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({
      message: 'Data saved successfully to Google Sheet',
    });
  } catch (error) {
    console.error('Error saving data to Google Sheet:', error);
    return NextResponse.json({
      message: 'Failed to process JSON file',
      error: (error as Error).message,
    });
  }
}
