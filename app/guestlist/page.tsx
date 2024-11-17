import { rsvpData } from '@/data/rsvp';

export default function GuestListPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Guest List</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {rsvpData.length > 0 ? (
          <ul className="space-y-4">
            {rsvpData.map((guest: string, index) => (
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
