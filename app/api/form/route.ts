import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises'; // Import mkdir
import { join } from 'path';

export async function POST(request: Request): Promise<Response> {
  try {
    // Read the body and parse it as JSON
    const data = await request.json();

    // Check if the data is an object or a list
    if (typeof data !== 'object' || data === null) {
      return NextResponse.json({
        message: 'Invalid data format: expected an object or a list of objects.',
      });
    }

    // Define the path to save the JSON data
    const filePath = join(process.cwd(), 'data', 'rsvp.ts');

    // Ensure the directory exists
    await mkdir(join(process.cwd(), 'data'), { recursive: true });

    // Read the existing file content if it exists
    let existingData = [];
    try {
      const fileContent = await readFile(filePath, 'utf8');
      const match = fileContent.match(/export const rsvpData = ([\s\S]*);/);
      if (match) {
        existingData = JSON.parse(match[1]);
      }
    } catch (error) {
        console.log(error)
      // If the file doesn't exist, proceed with an empty array
    }

    // Ensure the existingData is an array
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Add the new data to the existing data
    existingData.push(data);

    // Convert updated data to a text representation
    const jsonContent = `export const rsvpData = ${JSON.stringify(existingData, null, 2)};`;

    // Write the updated JSON data to the file
    await writeFile(filePath, jsonContent, 'utf8');

    // Return a success response
    return NextResponse.json({
      message: 'Data saved successfully',
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Failed to process JSON file',
      error: (error as Error).message,
    });
  }
}
