import { drawCard, initializeDeck } from "./fakeCardDb";
 
describe('drawing cards', () => {
    test('can draw a card', () => {
        const card = drawCard()
        console.log(card);
        expect(card).not.toBeNull();
    })
    test('initiliaze 10 cards', () => {
        const cards = initializeDeck()
        expect(cards).toHaveLength(10);
        console.log(cards)
        for (const card of cards){
            expect(card.consequenceIds).toBeTruthy()
        }
    })
})