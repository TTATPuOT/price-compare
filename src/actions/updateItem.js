import { ACTION_UPDATE_ITEM } from "../constants/actionTypes";

export default (price, amount, typeKey, itemKey) => {
    let result = Math.round(price / amount * 100) / 100;
    result = result.toString();
    let cents = result.split('.');
    result = cents[0];

    result = result.replace(/(\d)(?=(\d{3})+$)/g, '$1 ').trim();
    if (cents[1]) result += "," + cents[1];
    result = result.trim();

    return {
        type: ACTION_UPDATE_ITEM,
        payload: {
            price: price,
            amount: amount,
            result: result,
            typeKey: typeKey,
            itemKey: itemKey,
        }
    }
}
