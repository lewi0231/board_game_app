export type EventCard = {
    id: number;
    name: string;
    description: string;
    resolution: {
        order: number;
        prosperity: number;
        nature: number;
        education: number;
        innovation: number;
    };
    consequenceIds: number[];
};

export const eventCards: EventCard[] = 
[{
    id: 1,
    name: "Quantum Leap in Computing",
    description: "Revolutionizes industries, but creates a skill gap in the workforce.",
    resolution: {
        order: 0,
        prosperity: 2,
        nature: 0,
        education: -1,
        innovation: 1
    },
    consequenceIds: [35, 36, 37]
},
{
    id: 2,
    name: "Discovery of a Hidden City",
    description: "Offers historical insights but attracts looters and tourists, risking preservation.",
    resolution: {
        order: 1,
        prosperity: -1,
        nature: 1,
        education: 2,
        innovation: 0
    },
    consequenceIds: [38, 39, 40]
},
{
    id: 3,
    name: "Sudden Plant Sentience",
    description: "Plants start communicating, raising ethical dilemmas about agriculture and deforestation.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: 2,
        education: 1,
        innovation: -1
    },
    consequenceIds: [32, 33, 34]
},

{
    id: 6,
    name: "Rise of Virtual Celebrities",
    description: "AI-generated personalities become more popular than real humans, shifting the entertainment industry.",
    resolution: {
        order: 1,
        prosperity: 1,
        nature: -1,
        education: 0,
        innovation: 2
    },
    consequenceIds: [41, 42, 43]
},
{
    id: 7,
    name: "Ancient Virus Revival",
    description: "A melting glacier releases an ancient virus, posing a new threat to global health.",
    resolution: {
        order: 1,
        prosperity: -2,
        nature: -1,
        education: 2,
        innovation: 1
    },
    consequenceIds: [44, 45, 46]
},
{
    id: 8,
    name: "Global Sleep Disorder",
    description: "A mysterious condition is causing people worldwide to lose the ability to sleep, affecting productivity.",
    resolution: {
        order: -1,
        prosperity: -2,
        nature: 0,
        education: 1,
        innovation: 2
    },
    consequenceIds: [47, 48]
},
{
    id: 9,
    name: "Robot Rights Movement",
    description: "Advanced AI and robots start a movement for their own rights, leading to legal and ethical debates.",
    resolution: {
        order: 1,
        prosperity: 0,
        nature: 0,
        education: 2,
        innovation: 1
    },
    consequenceIds: [49, 50]
},
{
    id: 10,
    name: "Interstellar Message Received",
    description: "Humanity receives a cryptic message from an unknown extraterrestrial civilization.",
    resolution: {
        order: 0,
        prosperity: 1,
        nature: 0,
        education: 2,
        innovation: 3
    },
    consequenceIds: [51, 52]
},
{
    id: 11,
    name: "Global Illiteracy Crisis",
    description: "A new form of digital communication leads to a rapid decline in traditional literacy skills.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: 0,
        education: -2,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 12,
    name: "Psychic Abilities Emerge",
    description: "A small percentage of the population develops psychic abilities, leading to fear and fascination.",
    resolution: {
        order: 0,
        prosperity: 1,
        nature: 1,
        education: 2,
        innovation: 1
    },
    consequenceIds: [53, 54]
},
{
    id: 13,
    name: "Universal Language Invented",
    description: "A new universal language is invented, promising to unite humanity but also causing cultural loss.",
    resolution: {
        order: 2,
        prosperity: 1,
        nature: 0,
        education: 2,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 14,
    name: "Mass Teleportation Device",
    description: "A device that allows instant teleportation is invented, revolutionizing travel but causing security concerns.",
    resolution: {
        order: -1,
        prosperity: 3,
        nature: 2,
        education: 0,
        innovation: 3
    },
    consequenceIds: [55, 56]
},
{
    id: 15,
    name: "Cryptocurrency Becomes Main Currency",
    description: "Destabilizes traditional economies and alters global financial power balance.",
    resolution: {
        order: -2,
        prosperity: 1,
        nature: 0,
        education: 0,
        innovation: 2
    },
    consequenceIds: [57, 58]
},
{
    id: 16,
    name: "Mysterious Disappearance of Bees",
    description: "Threatens global agriculture but sparks a push for ecological innovations.",
    resolution: {
        order: 0,
        prosperity: -2,
        nature: 2,
        education: 1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 17,
    name: "Underwater Habitation",
    description: "Solves land shortage but impacts marine ecosystems.",
    resolution: {
        order: 1,
        prosperity: 1,
        nature: -2,
        education: 0,
        innovation: 2
    },
    consequenceIds: [60, 61]
},
{
    id: 18,
    name: "Celebrity Becomes Dictator",
    description: "A popular figure gains political power, leading to a cult of personality regime.",
    resolution: {
        order: -2,
        prosperity: -1,
        nature: 0,
        education: -1,
        innovation: 0
    },
    consequenceIds: [62, 63]
},
{
    id: 19,
    name: "Reality Warping Field",
    description: "Random areas where physical laws are altered, causing scientific wonder and public fear.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: 1,
        education: 2,
        innovation: 3
    },
    consequenceIds: []
},
{
    id: 20,
    name: "Global Dream Sharing Network",
    description: "People’s dreams become interconnected, affecting mental health and privacy.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: 0,
        education: -1,
        innovation: 1
    },
    consequenceIds: [64, 65]
},
{
    id: 21,
    name: "Mystical Forest Appears Overnight",
    description: "Brings magical creatures but disrupts local ecosystems and bewilders science.",
    resolution: {
        order: 1,
        prosperity: -1,
        nature: 2,
        education: 1,
        innovation: -1
    },
    consequenceIds: [66, 67]
},
{
    id: 22,
    name: "Spontaneous Global Amnesia",
    description: "A large portion of the population forgets recent years, leading to identity crises and geopolitical confusion.",
    resolution: {
        order: -2,
        prosperity: -1,
        nature: 0,
        education: -2,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 23,
    name: "Interdimensional Portal Discovery",
    description: "Offers exploration opportunities but risks invasion from unknown beings.",
    resolution: {
        order: -1,
        prosperity: 1,
        nature: 0,
        education: 2,
        innovation: 3
    },
    consequenceIds: []
},
{
    id: 24,
    name: "Virtual Reality Utopia",
    description: "People prefer virtual worlds, leading to neglect of real-world responsibilities.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: 0,
        education: 0,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 25,
    name: "Invention of Time Travel",
    description: "Opens possibilities for history exploration but risks timeline disturbances.",
    resolution: {
        order: -2,
        prosperity: 0,
        nature: 0,
        education: 2,
        innovation: 3
    },
    consequenceIds: []
},
{
    id: 26,
    name: "Alien Artifacts Found on Earth",
    description: "Promises advanced knowledge, yet instigates global panic and conspiracy theories.",
    resolution: {
        order: 1,
        prosperity: 1,
        nature: 0,
        education: 3,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 27,
    name: "Artificial Island Nation Emerges",
    description: "Offers new land but creates international disputes over sovereignty.",
    resolution: {
        order: 1,
        prosperity: 1,
        nature: -1,
        education: 0,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 28,
    name: "Global Telepathy Outbreak",
    description: "Human thoughts become audible, leading to chaos in personal and diplomatic relations.",
    resolution: {
        order: -2,
        prosperity: 0,
        nature: 0,
        education: -1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 29,
    name: "Weather Control Technology",
    description: "Ends natural disasters but sparks geopolitical tensions over climate control.",
    resolution: {
        order: 1,
        prosperity: 2,
        nature: 2,
        education: 0,
        innovation: 3
    },
    consequenceIds: []
},
{
    id: 30,
    name: "Rise of a Robot Workforce",
    description: "Boosts production efficiency but leads to mass unemployment.",
    resolution: {
        order: 0,
        prosperity: -2,
        nature: 1,
        education: -1,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 31,
    name: "Age-Reversal Breakthrough",
    description: "Extends life expectancy, causing overpopulation and resource strain.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: -2,
        education: 0,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 32,
    name: "Disruption in Agricultural Practices",
    description: "The newfound ability of plants to communicate leads to a moral and ethical debate about farming and harvesting, causing widespread disruption in agricultural practices and potential food shortages.",
    resolution: {
        order: -2,
        prosperity: -2,
        nature: 1,
        education: 2,
        innovation: -1
    },
    consequenceIds: []
},
{
    id: 33,
    name: "Mental Health Crisis",
    description: "The revelation that plants are sentient leads to widespread psychological distress, with increased cases of anxiety, depression, and existential crises among those who have harmed plants.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: 1,
        education: 1,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 34,
    name: "Economic Downturn in Timber and Paper Industries",
    description: "The ethical implications of cutting down sentient trees lead to a backlash against the timber and paper industries, causing economic downturn, job losses, and a rapid need for sustainable alternatives.",
    "resolution": {
        order: -2,
        prosperity: -2,
        nature: 2,
        education: 1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 35,
    name: "Widening Economic Disparity",
    description: "The rapid advancement in computing creates a significant divide in wealth and opportunities. Those with access to and knowledge of new technologies prosper, while others fall behind, exacerbating economic inequality.",
    resolution: {
        order: -1,
        prosperity: -2,
        nature: 0,
        education: -2,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 36,
    name: "Cybersecurity Threats",
    description: "Advanced computing power leads to more sophisticated cyber attacks, posing significant threats to national security, corporate data, and personal privacy.",
    resolution: {
        order: -2,
        prosperity: -1,
        nature: 0,
        education: 1,
        innovation: -1
    },
    consequenceIds: []
},
{
    id: 37,
    name: "Ethical and Regulatory Challenges",
    description: "The leap in computing technology raises complex ethical questions and regulatory challenges, as governments and institutions struggle to keep pace with rapid technological advancements and their societal implications.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: 0,
        education: 1,
        innovation: -1
    },
    consequenceIds: []
},
{
    id: 38,
    name: "Cultural Degradation",
    description: "The influx of tourists and looters leads to the degradation of the hidden city's cultural heritage and artifacts, diminishing its historical value and authenticity.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: -1,
        education: 0,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 39,
    name: "Environmental Impact",
    description: "Increased human activity around the hidden city causes environmental damage, including pollution and disruption of local ecosystems, threatening the area's natural heritage.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: -2,
        education: 0,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 40,
    name: "Strain on Local Resources",
    description: "The sudden surge in tourism and exploration activities puts a strain on local resources and infrastructure, leading to potential shortages and increased living costs for local inhabitants.",
    resolution: {
        order: -1,
        prosperity: -2,
        nature: -1,
        education: 0,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 41,
    name: "Diminishing Human Artist Opportunities",
    description: "As AI-generated personalities gain popularity, human artists and entertainers find fewer opportunities, leading to a significant shift in the job market of the entertainment industry.",
    resolution: {
        order: -1,
        prosperity: -2,
        nature: 0,
        education: 0,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 42,
    name: "Identity and Authenticity Crisis",
    description: "The blurring lines between AI-generated personalities and real humans create an identity and authenticity crisis, challenging the audience's perception of art and human expression.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: 0,
        education: -1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 43,
    name: "Erosion of Cultural Diversity",
    description: "The dominance of AI-generated celebrities could lead to a homogenization of entertainment, eroding cultural diversity and overshadowing region-specific human talents and art forms.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: 0,
        education: -1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 44,
    name: "Global Health Emergency",
    description: "The release of an ancient virus from a melting glacier leads to a global health crisis. With limited initial understanding of the virus, healthcare systems worldwide are strained as they struggle to respond effectively.",
    resolution: {
        order: -2,
        prosperity: -2,
        nature: -1,
        education: 1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 45,
    name: "Pandemic-Induced Economic Downturn",
    description: "The fear and spread of the ancient virus cause a significant economic downturn. Industries such as travel, tourism, and retail face severe disruptions, leading to job losses and economic instability.",
    resolution: {
        order: -2,
        prosperity: -3,
        nature: 0,
        education: 0,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 46,
    name: "Acceleration of Medical Research",
    description: "The challenge posed by the ancient virus spurs unprecedented global cooperation and investment in medical research, leading to rapid advancements in virology, vaccine development, and public health strategies.",
    resolution: {
        order: 1,
        prosperity: 1,
        nature: 0,
        education: 3,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 47,
    name: "Widespread Health Deterioration",
    description: "The inability to sleep leads to widespread health issues among the global population, including increased stress, weakened immune systems, and mental health disorders, severely impacting public health systems.",
    resolution: {
        order: -2,
        prosperity: -2,
        nature: 0,
        education: 1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 48,
    name: "Economic Slowdown and Workforce Crisis",
    description: "The loss of sleep significantly reduces productivity and cognitive function, leading to a global economic slowdown and a crisis in workforce efficiency, affecting multiple industries and economic sectors.",
    resolution: {
        order: -1,
        prosperity: -3,
        nature: 0,
        education: 1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 49,
    name: "Legal and Ethical Complications",
    description: "The demand for robot rights introduces complex legal and ethical challenges. Governments and legal systems struggle to define personhood, rights, and responsibilities for AI and robots, leading to heated debates and legal reforms.",
    resolution: {
        order: 1,
        prosperity: 0,
        nature: 0,
        education: 2,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 50,
    name: "Social and Employment Disruption",
    description: "The movement for robot rights causes social unrest and workforce disruption. Debates arise over the displacement of human workers and the role of robots in society, leading to strikes, protests, and a reevaluation of human labor.",
    resolution: {
        order: -1,
        prosperity: -1,
        nature: 0,
        education: 2,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 51,
    name: "Global Existential and Philosophical Reassessment",
    description: "The confirmation of extraterrestrial intelligence leads to a profound existential and philosophical reassessment among humanity, affecting various aspects of culture, religion, and human identity.",
    resolution: {
        order: 1,
        prosperity: 1,
        nature: 0,
        education: 3,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 52,
    name: "Rapid Advancement in Space Science and Technology",
    description: "The interstellar message fuels a global surge in interest and investment in space science and technology, leading to rapid advancements in these fields and a new era of space exploration.",
    resolution: {
        order: 1,
        prosperity: 2,
        nature: 0,
        education: 2,
        innovation: 3
    },
    consequenceIds: []
},
{
    id: 54,
    name: "Social Division and Fear",
    description: "The emergence of psychic abilities creates social divisions, with widespread fear and suspicion towards those with such abilities. This leads to social unrest, discrimination, and debates over human rights and privacy.",
    resolution: {
        order: -2,
        prosperity: 0,
        nature: 0,
        education: 1,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 55,
    name: "New Fields of Study and Ethical Dilemmas",
    description: "Psychic abilities spur new scientific fields and research into human potential. However, they also raise ethical dilemmas regarding the use and control of such abilities, impacting law, education, and healthcare systems.",
    resolution: {
        order: 0,
        prosperity: 1,
        nature: 0,
        education: 3,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 56,
    name: "Global Security and Border Control Challenges",
    description: "The advent of mass teleportation creates significant challenges for global security and border control. Nations struggle to monitor and regulate the flow of people and goods, leading to concerns about illegal activities and national security.",
    resolution: {
        order: -3,
        prosperity: 1,
        nature: 0,
        education: 0,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 57,
    name: "Collapse of Traditional Transportation Industries",
    description: "The widespread adoption of teleportation technology leads to the collapse of traditional transportation industries, including airlines, shipping, and public transit, resulting in economic disruption and job losses.",
    resolution: {
        order: -2,
        prosperity: -2,
        nature: 1,
        education: 0,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 57,
    name: "Economic Instability and Market Volatility",
    description: "The shift to cryptocurrency as the main currency leads to significant economic instability and market volatility. Traditional financial institutions struggle to adapt, and there are wide fluctuations in wealth distribution.",
    resolution: {
        order: -3,
        prosperity: -1,
        nature: 0,
        education: 0,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 58,
    name: "Disruption of Global Financial Hierarchies",
    description: "The adoption of cryptocurrency disrupts established global financial hierarchies and power structures, leading to a reconfiguration of international economic relations and potential geopolitical tensions.",
    resolution: {
        order: -2,
        prosperity: 1,
        nature: 0,
        education: 0,
        innovation: 2
    },
    consequenceIds: []
},
{
    id: 60,
    name: "Marine Ecosystem Disruption",
    description: "The development of underwater habitats leads to significant disruption of marine ecosystems. The construction and existence of these habitats disturb marine life and may lead to the degradation of underwater environments.",
    resolution: {
        order: 0,
        prosperity: 0,
        nature: -3,
        education: 1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 61,
    name: "Resource Allocation Conflicts",
    description: "As underwater habitation becomes more prevalent, conflicts arise over resource allocation and territorial rights in marine areas, leading to potential geopolitical tensions and disputes over maritime law.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: -2,
        education: 0,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 62,
    name: "Suppression of Dissent and Free Speech",
    description: "The celebrity-turned-dictator's regime leads to the suppression of dissent and free speech. Media censorship and control become rampant, and political opposition faces severe crackdowns.",
    resolution: {
        order: -3,
        prosperity: -1,
        nature: 0,
        education: -2,
        innovation: -1
    },
    consequenceIds: []
},
{
    id: 63,
    name: "Economic Instability and Corruption",
    description: "The regime is characterized by economic instability and corruption. The focus on the cult of personality leads to mismanagement of economic policies, resulting in inflation, unemployment, and widespread corruption.",
    resolution: {
        order: -2,
        prosperity: -2,
        nature: 0,
        education: -1,
        innovation: -1
    },
    consequenceIds: []
},
{
    id: 64,
    name: "Mental Health Challenges",
    description: "The interconnectedness of people's dreams leads to widespread mental health challenges. The inability to disconnect from a shared dream network causes increased cases of sleep disturbances, anxiety, and confusion regarding reality versus dream experiences.",
    resolution: {
        order: -2,
        prosperity: 0,
        nature: 0,
        education: -2,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 65,
    name: "Privacy and Ethical Concerns",
    description: "The shared dream network raises significant privacy and ethical concerns. The blurring of personal and shared dream experiences creates a dilemma about the ownership of dreams and the potential for misuse of intimate thoughts and images.",
    resolution: {
        order: -1,
        prosperity: 0,
        nature: 0,
        education: -1,
        innovation: 1
    },
    consequenceIds: []
},
{
    id: 66,
    name: "Disruption of Local Ecosystems",
    description: "The sudden appearance of the mystical forest and its magical creatures disrupts local ecosystems. Native flora and fauna are affected, leading to ecological imbalances and the potential loss of species.",
    resolution: {
        order: 0,
        prosperity: -1,
        nature: -2,
        education: 1,
        innovation: 0
    },
    consequenceIds: []
},
{
    id: 67,
    name: "Challenges to Scientific Understanding",
    description: "The mystical nature of the forest and its creatures poses a significant challenge to existing scientific understanding. This leads to widespread confusion and reevaluation in the scientific community, affecting educational curricula and research priorities.",
    resolution: {
        order: 1,
        prosperity: 0,
        nature: 1,
        education: 2,
        innovation: -1
    },
    consequenceIds: []
}

];

export default eventCards;
