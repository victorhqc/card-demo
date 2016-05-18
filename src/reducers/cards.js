import {
    FETCH_CARDS,
    POP_CARD,
    PUSH_CARD,
    SET_FETCHING_STATE,
    fetchCards,
    popCard,
    pushCard,
    setFetchingState
} from '../actions';

function card( state, action ) {
    switch(action.type) {
        case POP_CARD:
            if(action.id !== state.id) {
                return true;
            }

            return false;
        default:
            return state;
    }
}

export function cards(state = [], action = {}) {
    switch(action.type) {
        case FETCH_CARDS:
            return action.cards;
        case POP_CARD:
            return state.filter( c => card(c, action) );
        case PUSH_CARD:
            return [
                ...state,
                action.note
            ];
        default:
            return state;
    }
}

export function isFetching(state = false, action = {}) {
    switch (action.type) {
        case SET_FETCHING_STATE:
            return action.state;
        default:
            return state;
    }
}
