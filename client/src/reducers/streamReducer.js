import _ from 'lodash';
import { CREATE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM } from '../actions/typs';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};