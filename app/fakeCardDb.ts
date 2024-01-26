import { EventCard, eventCards } from "./cardsConfig";

export const drawCard = () => {
    const card = eventCards[randomCardIndex(eventCards.length)]
    return card;
}

const randomCardIndex = (numAvailableCards: number) => {
    return Math.floor(Math.random() * numAvailableCards);
}

export const initializeDeck = () => {
    // TODO - account for duplciates (wait for db)
    const deck = []
    while (deck.length < 10){
        const card = drawCard()
        if (card.consequenceIds.length > 0){
            deck.push(card);
        }
    }
    return deck;
}

const retrieveConsquenceFromEventCard = (eventCard: EventCard) => {
    //TODO - improve way of accounting for duplicates
    const index = randomCardIndex(eventCard.consequenceIds.length)
    const cardId = eventCard.consequenceIds[index]
    const card = eventCards.find((card) => {
        if (card.id === cardId){
            return card;
        }
    })
    console.log("This is the consequence to be added", card)
    return card;
}

export const addConsequenceToEventDeck = (eventCard: EventCard) =>{
    const consequenceCard = retrieveConsquenceFromEventCard(eventCard);
    // This is where I would add it to the active deck.
}


// Things to do
// Create a postGres db
// Will need to have a main deck
// Cards are removed from the main deck and placed within the active deck
// The above also occurs when consequence cards are added 
// full test out the functionality prior to creating UI
