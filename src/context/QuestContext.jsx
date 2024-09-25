import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const QuestContext = createContext();

export const QuestProvider = ({ children }) => {
    const [acceptedQuests, setAcceptedQuests] = useState([]);

    const acceptQuest = (id) => {
        if (!acceptedQuests.includes(id)) {
            setAcceptedQuests([...acceptedQuests, id]);
        }
    };

    const removeQuest = (id) => {
        setAcceptedQuests(acceptedQuests.filter((questID) => questID !== id));
    };

    return (
        <QuestContext.Provider value={{ acceptedQuests, acceptQuest, removeQuest }}>
            {children}
        </QuestContext.Provider>
    );    
};

QuestProvider.propTypes = {
    children: PropTypes.node.isRequired,
};