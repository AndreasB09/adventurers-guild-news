import alchemistDesk from '../assets/images/articles/alchemist_desk.jpg';
import doublePotions from '../assets/images/articles/double_potions.jpg';
import fantasyGear from '../assets/images/articles/fantasy_gear.jpg';
import highpointVillage from '../assets/images/articles/highpoint_village.jpg';
import howlingMoon from '../assets/images/articles/howling_moon.jpg';
import magicalKraken from '../assets/images/articles/magical_kraken.jpg';
import mistyAlley from '../assets/images/articles/misty_alley.jpg';
// import realisticGear from '../assets/images/articles/realistic_gear.jpg';
import redDragon from '../assets/images/articles/red_dragon.jpg';
import silverTrail from '../assets/images/articles/silver_trail.jpg';
import vaultDoor from '../assets/images/articles/vault_door.jpg';

export const articles = [
    { 
        id: 1,
        title: "Dragon Spotted in Northern Highlands",
        snippet: "Reports have come in from local merchants...",
        image: redDragon,
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
                src: highpointVillage,
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
        image: doublePotions,
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
              type: "image",
              src: alchemistDesk,
              alt: "Alchemists Desk"
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
        title: "Mysterious bank robbery leaves authorities baffled",
        snippet: "A daring bank heist in the heart of the city has authorities on edge, with no clear leads and a web of speculation surrounding the case.",
        image: vaultDoor,
        tags: ["news", "crime", "mystery"],
        content: [
            {
              type: "paragraph",
              text: "In a startling turn of events, the city's central bank was robbed in the dead of night, leaving the authorities and the City Guard with more questions than answers. The vault, known for its complex enchantments and formidable security, was breached with a level of precision that has confounded even the most seasoned investigators. No alarms were triggered, and there were no witnesses, sparking speculation that whoever orchestrated the heist was no ordinary thief."
            },
            {
              type: "paragraph",
              text: "Adding to the intrigue, guards discovered traces of claw marks and deep indentations in the marble floors—signs commonly associated with the Shadow Hounds, spectral canines known to serve Lord Malachor the Enigmatic, whose influence has spread like a dark tide across the realm. Rumors suggest that Nightstalker Wraiths and Obsidian Golems might also be in play, adding to the unease. While these traces provide an unsettling link to Malachor, officials remain tight-lipped about drawing conclusions too soon."
            },
            {
              type: "image",
              src: mistyAlley,
              alt: "Misty alleyway"
            },
            {
              type: "paragraph",
              text: "Despite these findings, investigators are exploring additional leads. Witness reports have mentioned suspicious activity near the river docks, where a known group of rogue mercenaries operates. While their involvement in such a high-profile robbery would be unprecedented, it has not been ruled out. Additionally, some citizens claim to have seen figures cloaked in magical shadow moving swiftly through the marketplace on the night of the robbery."
            },
            {
              type: "paragraph",
              text: "The authorities have responded by doubling patrols around key city structures and urging the public to remain vigilant. Captain Alaric of the City Guard issued a statement: \"We are taking this matter extremely seriously and are committed to finding those responsible. We ask anyone with information, no matter how small, to come forward immediately.\""
            }
        ]
    },
    { 
        id: 4,
        title: "Mastering the Hunt: How to Track and Identify Were-Creatures",
        snippet: "Delving into the art of tracking the elusive were-creatures requires more than just keen senses; it demands experience, insight, and the right tools.",
        image: howlingMoon,
        tags: ["experienced", "tracking", "monsters"],
        content: [
          {
            type: "paragraph",
            text: "Were-creatures, known for their dual nature and shape-shifting abilities, have long posed challenges to even the most seasoned trackers. From werewolves lurking in dense forests to werebears prowling the tundra, each type of were-creature leaves distinct clues that, when identified correctly, can be used to follow their trails and anticipate their movements. This guide provides expert tips for recognizing their signs and patterns."
          },
          {
            type: "paragraph",
            text: "Before setting out to track a were-creature, it's crucial to understand their unique characteristics. Unlike ordinary predators, were-creatures exhibit a blend of animalistic and humanoid behaviors. They are most active during the full moon, but experienced trackers know that many types retain partial control over their transformations outside of these phases. Knowing when and where these beings are most likely to hunt or hide is half the battle."
          },
          {
            type: "paragraph",
            text: "Tracking were-creatures requires a sharp eye and detailed knowledge. Here are the most common signs:\n\n- **Unnatural Tracks**: Were-creatures often leave tracks that start as human footprints and morph into clawed, animalistic paw prints. These transitional prints are a telltale sign of a recent transformation.\n- **Claw Marks on Trees and Rocks**: Large gouges, often higher than any natural animal could reach, indicate territorial marking or aggressive behavior.\n- **Strange Fur and Sheddings**: Were-creatures often leave behind tufts of fur that may look ordinary at first glance but carry an unnatural thickness or shine. Collecting samples can help identify specific types."
          },
          {
            type: "image",
            src: silverTrail,
            alt: "Silvery trail in forest"
          },
          {
            type: "paragraph",
            text: "Different were-creatures leave different clues:\n\n- **Werewolves**: Known for howling and traveling in packs during the full moon. Trackers often find bloodied paw prints and remnants of partially consumed prey near their lairs.\n- **Werebears**: Solitary and immensely strong, werebears leave deep, wide footprints. They're often found near rivers or in mountainous regions.\n- **Wererats**: More cunning and small, wererats are found in urban settings, leaving clawed marks on alley walls and gnawed scraps of food behind.\n- **Other Variants**: Werecats, weretigers, and other regional variants may exhibit behaviors unique to their animal nature, such as claw marks on trees for werecats or lingering in warm climates for weretigers."
          },
          {
            type: "paragraph",
            text: "When tracking were-creatures, remember:\n\n- **Heightened Senses**: Were-creatures often have acute senses and may double back on their trails to ambush pursuers. Be prepared for unexpected encounters.\n- **Silver Markers**: Using silver powder to mark trees or stones can help prevent your scent from being detected by were-creatures, as their supernatural nature reacts subtly to silver.\n- **Patience and Silence**: Never underestimate their intelligence. Stay silent, keep low to the ground, and move slowly."
          },
          {
            type: "paragraph",
            text: "Tracking and identifying were-creatures is a perilous but rewarding endeavor. With the right knowledge, tools, and skills, experienced trackers can turn the tables on these supernatural predators. Whether you're following the trail of a werewolf or piecing together clues about a wererat in the city, staying vigilant and prepared is key to a successful hunt."
          }
        ],
    },
        {
          id: 5,
          title: "Rising Peril at Sea: The Mystery of Aggressive Sea Monsters",
          snippet: "Sailors and adventurers alike face growing dread as the seas become increasingly dangerous, with sea creatures displaying unexplained aggression.",
          image: magicalKraken,
          tags: ["experienced", "sea monsters", "nautical threats"],
          content: [
              {
                  type: "paragraph",
                  text: "The sea has long been a source of both prosperity and peril for sailors and merchants. Recently, however, reports of increasingly aggressive sea monsters have turned the waters into a realm of fear. Over the past month, several trade ships have vanished without a trace, leaving families and guilds in distress and maritime trade at a standstill. The once-bustling ports now echo with uncertainty as sailors exchange anxious glances and ships remain docked, wary of the mysterious threat lurking beneath the waves."
              },
              {
                  type: "paragraph",
                  text: "Veteran adventurers and seafarers have weighed in on the situation, but even the most seasoned among them are baffled by what might have caused this sudden shift in behavior. Captain Elara Stormchaser, a famed adventurer known for her mastery of both land and sea, has spoken candidly: *\"The problem with dealing with aquatic monsters is that their domain provides unique challenges that most adventurers are ill-equipped to handle. Visibility is poor, the pressure is immense, and their movements are unpredictable.\"* Her words have resonated with many who understand that beneath the surface lies a world as foreign as it is treacherous."
              },
              {
                  type: "paragraph",
                  text: "The creatures involved range from massive krakens capable of dragging entire ships under to swarms of sirens whose haunting songs lure sailors to their doom. Witnesses claim to have seen giant serpents with scales as hard as iron and monstrous leviathans surfacing to unleash chaos before disappearing into the dark depths. Such encounters have left even the bravest captains questioning their ability to command a safe voyage."
              },
              {
                  type: "image",
                  src: fantasyGear,
                  alt: "Assortment of fantasy diving gear"
              },
              {
                  type: "paragraph",
                  text: "Adding to the enigma is the complete lack of understanding of what has provoked this surge in aggression. Some theorists suggest that recent underwater tremors or disruptions in magical ley lines may have disturbed the creatures’ natural habitats. Others fear the possibility of an ancient sea deity stirring from its slumber, angered by human encroachment."
              },
              {
                  type: "paragraph",
                  text: "The Maritime Guild has issued warnings to all sailors and trade companies, advising them to remain in port until further notice or risk facing the unknown dangers. Port cities that thrive on seaborne trade have seen their economies suffer, and the local guilds are organizing emergency meetings to plan responses and potential expeditions to uncover the source of the creatures' newfound hostility."
              },
              {
                  type: "image",
                  src: "path/to/second/image",
                  alt: "Sailors are increasingly hesitant to set sail, fearing what awaits them beyond the horizon."
              },
              {
                  type: "paragraph",
                  text: "For now, the mystery remains unsolved, and the sea continues to guard its secrets fiercely. Adventurers with nautical expertise are in high demand, and the call for experienced sea-warriors has never been more urgent. As more ships disappear and tales of monstrous encounters grow, one thing is certain: the waters are no longer just a path to far-off lands—they have become a battleground where only the most skilled will survive."
              }
          ]
      },
        // featured: true
];
