import { produce } from "immer";
import itemsInitialState from "../constants/itemsInitialState";
import {ACTION_ADD_ITEM, ACTION_ADD_TYPE, ACTION_UPDATE_ITEM} from "../constants/actionTypes";

export default produce((draft = itemsInitialState, action) => {
    const payload = action.payload;

    if (action.type === ACTION_UPDATE_ITEM) {
        draft[payload.typeKey][payload.itemKey] = {
            price: payload.price,
            amount: payload.amount,
            result: payload.result
        };
    } else if (action.type === ACTION_ADD_ITEM) {
        const typeKey = payload.typeKey;

        draft[typeKey].push(draft[typeKey][draft[typeKey].length - 1]);
    } else if (action.type === ACTION_ADD_TYPE) {
        draft.push(draft[draft.length - 1]);
    }

    return draft;
})
