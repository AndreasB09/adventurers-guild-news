import { quests } from "../../data/quests";
import { useContext, useEffect, useState, useCallback } from "react";
import { QuestContext } from "../../context/QuestContext";
import styles from './ProfilePage.module.css';

const API_BASE = "https://www.dnd5eapi.co/api";

const ProfilePage = () => {
  const [character, setCharacter] = useState({
    name: "Adventurer",
    race: "",
    class: "",
    alignment: "",
    abilityScores: {},
    spells: [],
    feat: "",
  });

  const [loading, setLoading] = useState(false);

  const getRandomItem = (items) =>
    items[Math.floor(Math.random() * items.length)];

  const fetchRandomCharacter = useCallback(async () => {
    setLoading(true);

    try {
      const raceResponse = await fetch(`${API_BASE}/races`);
      const raceData = await raceResponse.json();
      const randomRace = getRandomItem(raceData.results);

      const classResponse = await fetch(`${API_BASE}/classes`);
      const classData = await classResponse.json();
      const randomClass = getRandomItem(classData.results);

      const alignmentResponse = await fetch(`${API_BASE}/alignments`);
      const alignmentData = await alignmentResponse.json();
      const randomAlignment = getRandomItem(alignmentData.results);

      const abilityResponse = await fetch(`${API_BASE}/ability-scores`);
      const abilityData = await abilityResponse.json();
      const abilityScores = {};
      for (let ability of abilityData.results) {
        abilityScores[ability.name] = Math.floor(Math.random() * 20) + 1;
      }

      const spellsResponse = await fetch(`${API_BASE}/spells`);
      const spellsData = await spellsResponse.json();
      const randomSpells = [];
      for (let i = 0; i < 2; i++) {
        randomSpells.push(getRandomItem(spellsData.results).name);
      }

      const featsResponse = await fetch(`${API_BASE}/feats`);
      const featsData = await featsResponse.json();
      console.log("Feats API Data:", featsData);

      const randomFeat =
        featsData.results[Math.floor(Math.random() * featsData.results.length)]
          .name;
      console.log("Selected Random Feat:", randomFeat);

      const newCharacter = {
        name: "Adventurer",
        race: randomRace.name,
        class: randomClass.name,
        alignment: randomAlignment.name,
        abilityScores: abilityScores,
        spells: randomSpells,
        feat: randomFeat,
      };

      setCharacter(newCharacter);
      localStorage.setItem("character", JSON.stringify(newCharacter));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const savedCharacter = localStorage.getItem("character");
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    } else {
      fetchRandomCharacter();
    }
  }, [fetchRandomCharacter]);

  const { acceptedQuests, removeQuest } = useContext(QuestContext);

  const acceptedQuestsDetails = quests.filter((quest) =>
    acceptedQuests.includes(quest.id)
  );

  const abilityOrder = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  return (
    <div className={styles.wrapper}>
      <h2>Adventurer Profile</h2>
      <section className={styles.charInfo}>
        <h3>Character Information</h3>
        <p>Name: {character.name}</p>
        <p>Race: {character.race || "Loading..."}</p>
        <p>Class: {character.class || "Loading..."}</p>
        <p>Alignment: {character.alignment || "Loading..."}</p>
      </section>

      <section className={styles.abScore}>
        <h3>Ability Scores</h3>
        {character.abilityScores ? (
          <ul>
            {abilityOrder.map((ability) => (
              <li key={ability}>
                {ability}: {character.abilityScores[ability] || 0}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ability scores yet.</p>
        )}
      </section>

      <section className={styles.spells}>
        <h3>Spells</h3>
        <ul>
          {character.spells.map((spell, index) => (
            <li key={index}>{spell}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Feat</h3>
        <p>{character.feat.name}</p>
      </section>

      <button onClick={fetchRandomCharacter} disabled={loading}>
        {loading ? "Updating..." : "Update Profile"}
      </button>

      <section className={styles.acceptedQ}>
        <h3>Accepted Quests:</h3>
        {acceptedQuestsDetails.length > 0 ? (
          <ul>
            {acceptedQuestsDetails.map((quest) => (
              <li key={quest.id}>
                {quest.title}
                <button onClick={() => removeQuest(quest.id)}>
                  Remove Quest
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No quests accepted yet.</p>
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
