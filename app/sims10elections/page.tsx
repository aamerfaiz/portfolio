"use client";

import { useState } from "react";
import sushanth from "../../public/images/Sushanth.jpeg";
import clen from "../../public/images/Clen.jpeg";
import aamer from "../../public/images/AamerVote.jpeg";
import sahil from "../../public/images/Sahil.jpeg";
import Image, { StaticImageData } from "next/image";

interface Candidate {
    id: number;
    name: string;
    image: StaticImageData;
    slogan: string;
}

export default function Sims10Elections() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const candidates: Candidate[] = [
        {
            id: 1,
            name: "Aamer Faiz",
            image: aamer,
            slogan: "Helping is not cheating.",
        },
        {
            id: 2,
            name: "Sahil GS",
            image: sahil,
            slogan: "Will be a fair President cause my skin can't be",
        },
        {
            id: 3,
            name: "Clen Rego",
            image: clen,
            slogan: "Whiskey Soda Brandy Pop, Clen Rego on the top",
        },
        {
            id: 4,
            name: "Sushanth Shetty",
            image: sushanth,
            slogan: "Vote padya bvc please",
        },
    ];

    const handleVote = async () => {
        if (!canVote || selectedCandidate === null || isSubmitting) return;

        setIsSubmitting(true); // 🔒 Disable button

        try {
            const checkRes = await fetch("/api/check-registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const checkData = await checkRes.json();
            if (!checkData.isRegistered) {
                alert("Your email is not registered to vote.");
                return;
            }

            const selected = candidates.find((c) => c.id === selectedCandidate);
            const voteRes = await fetch("/api/submit-vote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    candidateId: selectedCandidate,
                    candidateName: selected?.name || "",
                }),
            });

            const voteData = await voteRes.json();
            if (!voteRes.ok) {
                alert(voteData.message || "Something went wrong while voting.");
                return;
            }

            setSubmitted(true);
            console.log("Vote submitted successfully");
        } catch (error) {
            console.error("Error during voting:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false); // 🔓 Enable button again
        }
    };


    const canVote = name.trim() !== "" && email.trim() !== "" && selectedCandidate !== null;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-8">SIMS 10 Elections</h1>

            {submitted ? (
                <div className="text-center text-green-500 text-xl font-semibold">
                    Thank you for voting, {name.split(" ")[0]}!
                </div>
            ) : (
                <>
                    <div className="max-w-xl mx-auto mb-8">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {candidates.map((candidate) => (
                            <div
                                key={candidate.id}
                                className={`border rounded-xl p-4 text-center transition hover:scale-105 cursor-pointer ${selectedCandidate === candidate.id
                                    ? "border-yellow-400 bg-gray-800"
                                    : "border-gray-700 bg-gray-850"
                                    }`}
                                onClick={() => setSelectedCandidate(candidate.id)}
                            >
                                <Image
                                    src={candidate.image}
                                    alt={candidate.name}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-white"
                                />
                                <h2 className="text-xl font-bold">{candidate.name}</h2>
                                <p className="italic text-sm text-gray-400">{candidate.slogan}</p>
                                {selectedCandidate === candidate.id && (
                                    <p className="mt-2 text-yellow-400 font-semibold">Selected</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            onClick={handleVote}
                            disabled={!canVote || isSubmitting}
                            className={`px-6 py-3 rounded-lg font-bold transition ${!canVote || isSubmitting
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-yellow-500 hover:bg-yellow-600"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : "Submit Vote"}
                        </button>

                    </div>
                </>
            )}
        </div>
    );
}
