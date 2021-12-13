import { format, add, getDaysInMonth, startOfMonth, getYear, getDayOfYear } from 'date-fns';
import { dateToDateString } from '../Utils';

export default function Summary(props) {
    let totalMilesFromBase = 0;
    let totalMilesFromHome = 0;

    if (!props.logsLoading && !props.placesLoading) {
        for (let date of getDaysOfMonth(props.month)) {
            let dateString = dateToDateString(date)
            if (!props.logs.has(dateString)) {
                continue;
            }

            let placeId = props.logs.get(dateString).placeId;

            console.log(placeId)
            totalMilesFromBase += +props.places.get(placeId).distanceFromBase;
            totalMilesFromHome += +props.places.get(placeId).distanceFromHome;
        }
    }

    return (
        <table className="summary">
            <tbody>
                <tr>
                    <th colSpan="2">Summary for {format(props.month, "MMMM yyyy")}</th>
                </tr>
                <tr>
                    <td>Total miles from base</td>
                    <td>{props.logsLoading ? "..." : totalMilesFromBase}</td>
                </tr>
                <tr>
                    <td>Total miles from home</td>
                    <td>{props.logsLoading ? "..." : totalMilesFromHome}</td>
                </tr>
                <tr>
                    <td>Money earned</td>
                    <td>£{props.logsLoading ? "..." : (totalMilesFromBase * 0.45).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    )
}

function getDaysOfMonth(monthStart) {
    let days = []

    for (let i = 0; i < getDaysInMonth(monthStart); i++) {
        days.push(add(monthStart, { days: i }));
    }

    return days;
}
