import { format } from 'date-fns';

// Converts [{date: "2021-12-12", placeId: 1}, {date: "2021-12-13", placeId: 2}]
// to {"2021-12-12": {placeId: 1}, "2021-12-13": {placeId: 2}}
export function convertToMap(arrayOfObjs, key) {
    let map = new Map();

    for (let obj of arrayOfObjs) {
        map.set(obj[key], obj);
    }

    return map;
}

export function dateToDateString(date) {
    return format(date, "yyyy-MM-dd");
}