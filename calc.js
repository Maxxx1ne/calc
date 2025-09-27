import { sum, difference, composition, division } from "./math.js";

const OPERATIONS = {
    sum: "+",
    difference: "-",
    composition: "*",
    division: "/",
}

export const calculate = ({ a, b, operation }) => {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b)
            break;

        case OPERATIONS.difference:
            result = difference(a, b)
            break;

        case OPERATIONS.composition:
            result = composition(a, b)
            break;

        case OPERATIONS.divison:
            result = divison(a, b)
            break

        default:
            break;
    }

    return result;
}