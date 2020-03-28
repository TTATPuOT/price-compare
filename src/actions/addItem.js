import { ACTION_ADD_ITEM } from "../constants/actionTypes";

export default (typeKey) => {
    return {
        type: ACTION_ADD_ITEM,
        payload: {
            typeKey: typeKey,
        }
    }
}
