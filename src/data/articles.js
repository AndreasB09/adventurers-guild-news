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
        ],
        featured: true
    },
    { 
        id: 2,
        title: "Top 5 Potions for Beginners",
        snippet: "Never leave the guild without these potions...",
        tags: ["beginner"],
        content: [
            {
              type: "paragraph",
              text: "Potions can be lifesaving tools in your adventuring journeys. Whether you're delving into dark caves, scaling mountains, or simply traveling through unknown lands, a well-prepared adventurer never leaves the guild without the right potions. Here are the top 5 potions every beginner should have in their pack. From healing to enhancing your agility, these concoctions will help you stay alive—and thrive—on your quest."
            },
            {
              type: "paragraph",
              text: "Potion 1: Potion of Healing\nEffect: Restores a small amount of health instantly.\nA classic and absolute must-have for any adventurer, the Potion of Healing has saved more lives than any blade or spell. This red elixir quickly seals minor wounds and revitalizes the body, perfect for emergencies in the middle of battle or after an unfortunate run-in with traps. Even the most seasoned adventurers carry at least one of these potions at all times. You never know when a stray arrow or a sudden ambush might leave you needing a quick patch-up."
            },
            {
              type: "paragraph",
              text: "Potion 2: Potion of Swiftfoot\nEffect: Increases movement speed for a short time.\nWhen speed is of the essence, the Potion of Swiftfoot can make the difference between life and death. This light blue potion grants the drinker the ability to move at astonishing speeds for a brief period, perfect for dodging incoming attacks, outrunning pursuers, or simply cutting down travel time. New adventurers often find themselves in situations where quick thinking and even quicker feet are needed—don't get caught unprepared."
            },
            {
              type: "paragraph",
              text: "Potion 3: Potion of Night Vision\nEffect: Grants the ability to see in darkness for an hour.\nVenturing into dark caves or shadowy forests can be treacherous without proper visibility. The Potion of Night Vision offers the perfect solution by allowing the drinker to see as clearly in darkness as they would in daylight. This green elixir is invaluable for nocturnal missions or when exploring unlit dungeons. With one swig, you'll be able to navigate the most dangerous darkened paths without stumbling over traps or missing crucial clues."
            },
            {
              type: "paragraph",
              text: "Potion 4: Potion of Tiny Speech\nEffect: Allows the drinker to speak with small animals for 10 minutes.\nWhile it may seem whimsical, the Potion of Tiny Speech can be surprisingly useful. By drinking this bubbly pink potion, you'll gain the ability to communicate with small creatures like birds, mice, and squirrels. In the wild, these critters often witness events that humans overlook, making them excellent sources of information. Whether you're gathering intel from a mouse in the walls of an ancient ruin or befriending a bird that's seen something suspicious, this potion adds a clever, often underestimated tool to your adventurer's kit."
            },
            {
              type: "paragraph",
              text: "Potion 5: Potion of Sticky Fingers\nEffect: Grants the ability to stick to surfaces for climbing, like a gecko, for 10 minutes.\nWhether you're scaling a steep cliffside, sneaking through a fortress, or trying to get out of a tight situation, the Potion of Sticky Fingers will turn you into a climbing pro. This thick, green potion gives your hands and feet the ability to cling to almost any surface, making it perfect for escaping enemies, sneaking into high places, or avoiding a dangerous fall. Beginners will love this potion for its versatility—it's a lifesaver in situations where agility and vertical movement are key."
            },
            {
              type: "paragraph",
              text: "No adventurer is truly ready to face the wilds without a good supply of potions. These five potions are essential for any beginner seeking to survive and excel in their journeys. Whether you're healing up after a tough battle, sprinting away from danger, or even chatting with a helpful squirrel, make sure you have these magical concoctions on hand for whatever the world throws your way."
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
        // featured: true
    },
];
  