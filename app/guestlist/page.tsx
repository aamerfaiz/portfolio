"use client";

import { useEffect, useState } from "react";

interface Guest {
  name: string;
  email: string;
  attending: string;
  additionalpeople: string;
  pickuprequired: string;
}

export default function GuestListPage() {
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
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Guest List</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {loading ? (
          <p className="text-center text-gray-500 py-8">Loading...</p>
        ) : guestList.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {guestList.map((guest, index) => (
              <li
                key={index}
                className="p-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center space-y-4 sm:space-y-0"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{guest.name}</h3>
                  <p className="text-sm text-gray-500">Additional People: {guest.additionalpeople}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className={guest.attending === "yes" ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                      {guest.attending === "yes" ? "Attending" : "Not Attending"}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className={guest.pickuprequired === "yes" ? "text-yellow-500 font-semibold" : "text-gray-400"}>
                      {guest.pickuprequired === "yes" ? "Pickup Required" : "No Pickup"}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 py-8">No guests have RSVPed yet.</p>
        )}
      </div>
    </div>
  );
}
