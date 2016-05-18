import fetch from 'isomorphic-fetch';
import {
    JSON_HEADERS,
    checkStatus,
    parseJSON
} from '../helpers/fetch';

import * as statics from './card-statics';

import { url } from 'api';
const CARDS_URL = url + 'cards';

let accessToken = '';
export function fetchRemoteCards() {

    return function(dispatch) {

        dispatch(statics.setFetchingState(true));

        return fetch( CARDS_URL, {
            method: 'GET',
            headers: JSON_HEADERS
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(json => {
            dispatch(statics.setFetchingState(false));
            dispatch(statics.fetchCards(json.cards));
        });
    };
}
