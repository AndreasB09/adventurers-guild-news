import { quests } from "../data/quests";
import { useContext } from "react";
import { QuestContext } from "../context/QuestContext";
import { useState } from "react";

const API_BASE = 'https://www.dnd5eapi.co/api';

const ProfilePage = () => {

    const [character, setCharacter] = useState({
        name: 'Adventurer',
        race: '',
        class: '',
        alignment: '',
        abilityScores: {}
    });

    const [loading, setloading] = useState(false);

    const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

    const fetchRandomCharacter = async () => {
        setloading(true);

        try {
            const raceResponse = await fetch (`${API_BASE}/races`);
            const raceData = await raceResponse.json();
            const randomRace = getRandomItem(raceData.results);

            const classResponse = await fetch (`${API_BASE}/classes`);
            const classData = await classResponse.json();
            const randomClass = getRandomItem(classData.results);

            const alignmentResponse = await fetch (`${API_BASE}/alignments`);
            const alignmentData = await alignmentResponse.json();
            const randomAlignment = getRandomItem(alignmentData.results);

            const abilityResponse = await fetch (`${API_BASE}/ability-scores`);
            const abilityData = await abilityResponse.json();
            const abilityScores = {};
            for (let ability of abilityData.results) {
                abilityScores[ability.name] = Math.floor(Math.random() * 20) +1;
            }

            setCharacter({
                ...character,
                race: randomRace.name,
                class: randomClass.name,
                alignment: randomAlignment.name,
                abilityScores: abilityScores
            });
        } catch (error) {
            console.error("Error fetching data from API:", error);
        }

        setloading(false);
    }

    const { acceptedQuests, removeQuest } = useContext(QuestContext);

    const acceptedQuestsDetails = quests.filter((quest) =>
        acceptedQuests.includes(quest.id)
    );

    return (
        <div>
            <h2>Adventurer Profile</h2>
            <section>
                <h3>Character Information</h3>
                <p>Name: {character.name}</p>
                <p>Race: {character.race || 'Loading..'}</p>
                <p>Class: {character.class || 'Loading..'}</p>
                <p>Alignment: {character.alignment || 'Loading..'}</p>
            </section>

            <section>
                <h3>Ability Scores</h3>
                {character.abilityScores ? (
                <ul>
                    {Object.entries(character.abilityScores).map(([ability, score]) => (
                    <li key={ability}>
                        {ability}: {score}
                    </li>
                    ))}
                </ul>
                ) : (
                <p>No ability scores yet.</p>
                )}
            </section>

            <button onClick={fetchRandomCharacter} disabled={loading}>
                {loading ? 'Generating...' : 'Randomize Character'}
            </button>

            <h3>Accepted Quests:</h3>
            {acceptedQuestsDetails.length > 0 ? (
                <ul>
                    {acceptedQuestsDetails.map((quest) => (
                        <li key={quest.id}>
                            {quest.title}
                            <button onClick={() => removeQuest(quest.id)}>Remove Quest</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No quests accepted yet.</p>
            )}
        </div>
      );
};

export default ProfilePage;