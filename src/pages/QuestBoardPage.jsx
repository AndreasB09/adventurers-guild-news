import { quests } from "../data/quests";
import { useContext } from "react";
import { QuestContext } from "../context/QuestContext";

const QuestBoardPage = () => {
    const { acceptedQuests, acceptQuest, removeQuest } = useContext(QuestContext);

    return (
      <div>
        <h2>Quest Board</h2>
        <div>
          {quests.map((quest) => (
            <div key={quest.id}>
              <h3>{quest.title}</h3>
              <p>{quest.description}</p>
              {acceptedQuests.includes(quest.id) ? (
                <div>
                    <p>You have accepted this quest!</p>
                    <button onClick={() => removeQuest(quest.id)}>Remove Quest</button>
                </div>
              ) : (
                <button onClick={() => acceptQuest(quest.id)}>Accept Quest</button>
              )}
              
            </div>
          ))}
        </div>
      </div>
    );
  };

export default QuestBoardPage;