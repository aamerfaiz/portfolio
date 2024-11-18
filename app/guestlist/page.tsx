"use client";

import { useEffect, useState } from "react";

// Define the type for a guest record
interface Guest {
  name: string;
  email: string;
  attending: string;
  additionalpeople: string;
  pickuprequired: string;
}

export default function GuestListPage() {
  // State to hold the list of guests
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGuestList = async () => {
      try {
        const response = await fetch("/api/guestlist"); // Call the API route
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Guest[] = await response.json();
        setGuestList(data);
      } catch (error) {
        console.error("Error fetching guest list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuestList();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Guest List</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : guestList.length > 0 ? (
          <ul className="space-y-4">
            {guestList.map((guest, index) => (
              <li
                key={index}
                className="border-b border-gray-300 pb-4 last:border-b-0"
              >
                <p className="text-lg font-semibold">Name: {guest.name}</p>
                <p className="text-md text-gray-600">Email: {guest.email}</p>
                <p className="text-md text-gray-600">Attending: {guest.attending}</p>
                <p className="text-md text-gray-600">Additional People: {guest.additionalpeople}</p>
                <p className="text-md text-gray-600">Pickup Required: {guest.pickuprequired}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No guests have RSVPed yet.</p>
        )}
      </div>
    </div>
  );
}
