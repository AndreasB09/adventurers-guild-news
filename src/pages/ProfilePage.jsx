import { quests } from "../data/quests";
import { useContext } from "react";
import { QuestContext } from "../context/QuestContext";

const ProfilePage = () => {
    const { acceptedQuests, removeQuest } = useContext(QuestContext);

    const acceptedQuestsDetails = quests.filter((quest) =>
        acceptedQuests.includes(quest.id)
    );

    return (
        <div>
            <h2>Adventurer Profile</h2>
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