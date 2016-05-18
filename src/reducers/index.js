import { combineReducers } from 'redux';

import * as cards from './cards';

export let rootReducer = combineReducers({
    cards: cards.cards,
    isFetching: cards.isFetching
});
