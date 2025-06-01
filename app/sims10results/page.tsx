"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aamer from "../../public/images/AamerVote.jpeg";
import sahil from "../../public/images/Sahil.jpeg";
import clen from "../../public/images/Clen.jpeg";
import sushanth from "../../public/images/Sushanth.jpeg";

interface Candidate {
    id: number;
    name: string;
    image: StaticImageData;
    slogan: string;
    votes?: number;
}

const initialCandidates: Candidate[] = [
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

export default function ResultsPage() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [maxVotes, setMaxVotes] = useState<number>(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVotes = async () => {
            try {
                const res = await fetch(`/api/get-results?timestamp=${Date.now()}`);
                const data = await res.json();
                const votes = data.voteCounts;

                const updated = initialCandidates.map((c) => ({
                    ...c,
                    votes: votes[c.id] || 0,
                }));

                updated.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
                setCandidates(updated);
                setMaxVotes(Math.max(...updated.map((c) => c.votes || 0), 1));
            } catch (error) {
                console.error("Error fetching results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVotes();
    }, []);

    const getBarColor = (index: number) => {
        if (index === 0) return "bg-yellow-400";
        if (index === 1) return "bg-gray-300";
        if (index === 2) return "bg-orange-400";
        return "bg-gray-600";
    };

    const getMedalEmoji = (index: number) => {
        if (index === 0) return "🥇";
        if (index === 1) return "🥈";
        if (index === 2) return "🥉";
        return `#${index + 1}`;
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-white py-10 px-4">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400 animate-pulse">
                🗳️ Election Results Leaderboard
            </h1>

            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                </div>
            ) : (
                <div className="max-w-3xl mx-auto space-y-6">
                    <AnimatePresence>
                        {candidates.map((candidate, index) => {
                            const barWidth = ((candidate.votes ?? 0) / maxVotes) * 100;

                            return (
                                <motion.div
                                    key={candidate.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-[#1e293b] p-4 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                                            <Image
                                                src={candidate.image}
                                                alt={candidate.name}
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-xl font-bold flex items-center gap-2">
                                                    {getMedalEmoji(index)} {candidate.name}
                                                </h2>
                                                <p className="text-yellow-300 font-semibold text-lg">
                                                    {candidate.votes ?? 0} votes
                                                </p>
                                            </div>
                                            <p className="text-sm italic text-gray-400">{candidate.slogan}</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-4 rounded-full bg-gray-700 overflow-hidden mt-2">
                                        <motion.div
                                            className={`${getBarColor(index)} h-full`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${barWidth}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
