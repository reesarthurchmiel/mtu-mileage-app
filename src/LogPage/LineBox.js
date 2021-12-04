import Line from './Line.js';
import './LineBox.css';
import { sub, add, eachDayOfInterval, format } from 'date-fns';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';

const DIRECTION_UP=0;
const DIRECTION_DOWN=1;

export default class LineBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick.bind(this);

        let now = new Date();
        let nowNormalized = new Date(now.getFullYear(), now.getMonth(), 1);

        this.state = {
            months: [
                sub(nowNormalized, {months: 1}),
                nowNormalized,
                add(nowNormalized, {months: 1}),
            ]
        }
    }

    handleClick(direction) {
        let newMonths = []
        if (direction === DIRECTION_UP) {
            let baselineMonth = this.state.months[0];
            newMonths = [
                sub(baselineMonth, {months: 3}),
                sub(baselineMonth, {months: 2}),
                sub(baselineMonth, {months: 1}),
            ].concat(this.state.months)
        } else {
            let baselineMonth = this.state.months[this.state.months.length - 1];
            newMonths = this.state.months.concat([
                add(baselineMonth, {months: 1}),
                add(baselineMonth, {months: 2}),
                add(baselineMonth, {months: 3}),
            ]);
        }

        this.setState(
            {
                months: newMonths,
            }
        )
    }

    render() {
        let startZIndex = 10000;

        return (
            <div className='linebox'>
                <div className='linebox_header'>
                    Date
                </div>
                <div className='linebox_header'>
                    Location
                </div>
                <div className='linebox_header'>
                    Done?
                </div>
                <LoadMoreButton direction={DIRECTION_UP} onClick={() => this.handleClick(DIRECTION_UP)} />

                {this.state.months.map(
                    month => <MonthOfLines zIndex={startZIndex--} date={month} />
                )}

                <LoadMoreButton direction={DIRECTION_DOWN} onClick={() => this.handleClick(DIRECTION_DOWN)} />
            </div>
        );
    }
}

function MonthOfLines(props) {
    let key = 0;

    let elms = [];
    elms.push(
        <div key={key++} className="linebox-wide" style={{zIndex: props.zIndex+1}}>
            {format(props.date, "MMMM yyyy")}
        </div>
    );

    let endOfMonth = add(props.date, {months: 1, days: -1}); // days: -1 so we don't get first day of next month
    for (const day of eachDayOfInterval({start: props.date, end: endOfMonth})) {
        elms.push(<Line key={key++} date={day} />);
    }

    elms.push(
        <div key={key++} className="linebox_summary linebox-wide" style={{zIndex: props.zIndex}}>
            {elms.length > 31 ? "Hellooo" : "Total money: £120. Per day: £25. Miles driven: 530mi. Miles paid: 560mi."}
        </div>
    );
    
    return elms;
}

function LoadMoreButton(props) {
    // FontAwesome icon
    let arrowIcon = <span className={"fas fa-angle-" + (props.direction === DIRECTION_UP ? "up" : "down")}></span>;

    return (
        <button
            className="linebox_loadButton linebox-wide"
            onClick={props.onClick}>
            {arrowIcon}
            {" Load more months "}
            {arrowIcon}
        </button>
    )
}