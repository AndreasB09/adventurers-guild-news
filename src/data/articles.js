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
                text: "A massive dragon was spotted flying over the Northern Highlands, causing widespread panic among the local farmers. The sighting occurred at dawn when local merchants traveling from the village of Highpoint first noticed the massive beast. Descriptions vary, but witnesses agree that the dragon had crimson scales, and its wingspan blocked out the rising sun."
            },
            {
                type: "paragraph",
                text: "The sighting has sparked immediate concern among nearby villages, with many residents fleeing to larger towns for safety. In Highpoint, the village closest to the sighting, farmers and villagers have been boarding up windows and fortifying their homes. Mayor Elric of Highpoint issued a statement this morning, urging residents to remain calm."
            },
            {
                type: "image",
                src: greenforest,
                alt: "Highpoint village"
            },
            {
                type: "paragraph",
                text: "Reports from local merchants suggest that this could be the same dragon rumored to have settled in the distant Iron Peaks months ago. While the guild's dragon experts have not confirmed whether the creature is territorial, they have warned that such sightings could be linked to recent disturbances in magical ley lines across the region."
            },
            {
                type: "paragraph",
                text: "In response to the potential threat, several adventuring parties have been dispatched to survey the area. One notable group, the Silverclaws, has reportedly taken up residence in Highpoint, preparing for a potential encounter. Their leader, Darian Wolfsbane, stressed the importance of caution: \"We must treat this situation with the utmost seriousness. Dragons are unpredictable and incredibly powerful, but if we act wisely, we can protect the villages and prevent further panic.\""
            },
            {
                type: "paragraph",
                text: "Many villagers have expressed both awe and fear at the dragon's appearance. While some see this as a sign of danger, others believe the dragon's presence might be a good omen, signaling the awakening of long-forgotten magic in the region. However, despite these speculations, no one is eager to test the dragon's patience. For now, local officials are encouraging caution, and all trade routes passing through the highlands have been temporarily rerouted."
            },
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
    },
    { 
        id: 4,
        title: "This is a featured article",
        snippet: "This featured article will be something...",
        image: greenforest,
        tags: ["experienced"],
        content: [
            {
              type: "paragraph",
              text: "The featured article is sponsored by the Miners Association."
            }
        ],
        featured: true
    }
];
  