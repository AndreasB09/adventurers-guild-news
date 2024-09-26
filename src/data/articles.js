import greenforest from '../assets/images/articles/greenforest.png';
import beachnight from '../assets/images/articles/beachnight.jpg';

export const articles = [
    { 
        id: 1,
        title: "Dragon Spotted in Northern Highlands",
        snippet: "Reports have come in from local merchants...",
        image: beachnight,
        tags: ["breaking news", "news"],
        content: [
            {
                type: "paragraph",
                text: "A massive dragon was spotted flying over the Northern Highlands, causing widespread panic among the local farmers."
            },
            {
                type: "image",
                src: greenforest,
                alt: "Highpoint village"
            }
        
        ]
    },
    { 
        id: 2,
        title: "Top 5 Potions for Beginners",
        snippet: "Never leave the guild without these potions...",
        tags: ["beginner"],
        content: [
            {
              type: "paragraph",
              text: "Potions can be lifesaving tools in your adventuring journeys. Here are the top 5 potions every beginner should have."
            }
        ]
    },
    { 
        id: 3,
        title: "Dungeon Cleared by Whitefang Guild",
        snippet: "Breaking news: The Dungeon of Shadows has been cleared...",
        tags: ["experienced"],
        content: [
            {
              type: "paragraph",
              text: "The Whitefang Guild achieved an incredible feat by clearing the dreaded Dungeon of Shadows. Here's what they faced."
            }
        ]
    }
];
  