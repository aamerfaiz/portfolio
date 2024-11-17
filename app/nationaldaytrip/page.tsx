"use client"
import { useState, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  attending: string;
  additionalpeople: string;
  pickuprequired: string;
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', attending: 'yes', additionalpeople: '', pickuprequired: 'no' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('RSVP successfully received!');
        console.log(data);
      } else {
        console.error('Failed to submit RSVP:', response.statusText);
        alert('Failed to submit RSVP');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };


  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-kfk bg-no-repeat	bg-cover	 text-white p-8 sm:p-20 gap-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">RSVP for Khor Fakkan Getaway</h1>
        <p className="text-xl">Join Us for a Family Getaway to Khor Fakkan on December 1st 2024!</p>
      </header>

      <form className="flex flex-col space-y-4 max-w-lg w-full" onSubmit={handleSubmit}>
        <select
          name="pickuprequired"
          value={formData.pickuprequired}
          onChange={handleChange}
          className="p-2 rounded bg-white/10 backdrop-blur-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <option className='text-black' value="no">I have my own vehicle</option>
          <option className='text-black' value="yes">I will need a pickup</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded bg-white/10 backdrop-blur-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded bg-white/10 backdrop-blur-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <select
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          className="p-2 rounded bg-white/10 backdrop-blur-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <option className='text-black' value="yes">Yes, I will attend</option>
          <option className='text-black' value="no">No, I will not attend</option>
        </select>
        <label htmlFor="additionalpeople" className="text-lg font-semibold">People joining with you (Names)</label>
        <input
          type="text"
          name="additionalpeople"
          placeholder="Eg: Aamer, Maazin"
          value={formData.additionalpeople}
          onChange={handleChange}
          className="p-2 rounded bg-white/10 backdrop-blur-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <button type="submit" className="bg-white text-cyan-500 font-bold p-2 rounded hover:bg-cyan-100 transition duration-300">
          Submit RSVP
        </button>
      </form>

      <footer className="text-center mb-8">
        <p>Looking forward to seeing you there!</p>
      </footer>
    </div>
  );
}
