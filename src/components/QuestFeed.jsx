import { useState, useEffect } from "react";
import { quests } from "../data/quests";

const QuestFeed = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const half = Math.ceil(quests.length / 2);
    const firstHalf = quests.slice(0, half);
    const secondHalf = quests.slice(half, quests.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet(prevSet => (prevSet === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const displayedQuests = currentSet === 0 ? firstHalf : secondHalf;

    return (
        <div>
            <h3>Quests</h3>
            <ul>
                {displayedQuests.map(quest => (
                    <li key={quest.id}>
                        <h4>{quest.title}</h4>
                        <p>{quest.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestFeed;