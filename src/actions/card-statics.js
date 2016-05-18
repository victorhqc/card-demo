export const FETCH_CARDS = 'FETCH_CARDS';

export function fetchCards(cards) {
    return {
        type: FETCH_CARDS,
        cards
    };
}

export const POP_CARD = 'POP_CARD';

export function popCard(id) {
    return {
        type: POP_CARD,
        id
    };
}

export const PUSH_CARD = 'PUSH_CARD';

export function pushCard(card) {
    return {
        type: PUSH_CARD,
        card
    };
}

export const SET_FETCHING_STATE = 'SET_FETCHING_STATE';

export function setFetchingState(state) {
    return {
        type: SET_FETCHING_STATE,
        state
    };
}
