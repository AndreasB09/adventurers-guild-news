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
        tags: ["beginner"]
    },
    { 
        id: 3,
        title: "Dungeon Cleared by Whitefang Guild",
        snippet: "Breaking news: The Dungeon of Shadows has been cleared...",
        tags: ["experienced"]
    }
];
  