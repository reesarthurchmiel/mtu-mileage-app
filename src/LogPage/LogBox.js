import { sub, add, eachDayOfInterval, format, eachWeekOfInterval, startOfMonth, lastDayOfMonth, getWeekOfMonth, isSameMonth, startOfWeek, lastDayOfWeek, isSameYear, getYear, getDayOfYear } from 'date-fns';
import React from 'react';
import Select from 'react-select';

import './LogBox.css';
import apiHandler from '../ApiHandler.js';

export default class LogBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        let now  = new Date();
        let week = startOfWeek(now);

        this.state = {
            week: week,
            places: [],
            logs: {},
        }
    }

    componentDidMount() {
        apiHandler.getPlaces().then(newPlaces => this.setState({
            places: newPlaces,
        }))

        apiHandler.getLogs(getYear(this.state.week)).then(newLogs => this.setState({
            logs: Object.assign({...this.state.logs}, newLogs),
        }))
    }

    handleClick(delta) {
        this.setState({
            week: add(this.state.week, delta),
        })
    }

    render() {
        return (
            <div className='logbox'>
                <div className='logbox_main'>
                    <div className='logbox_monthYearHeader'>
                        {getHeaderText(this.state.week)}
                    </div>
                    <div className='logbox_dateGrid'>
                        <div className='logbox_dateGrid_header'>
                            Date
                        </div>
                        <div className='logbox_dateGrid_header'>
                            Location
                        </div>
                        <Week logs={this.state.logs} places={this.state.places} weekStart={this.state.week} />
                    </div>
                </div>
                <div className='logbox_buttons'>
                    <button className='logbox_button' onClick={() => this.handleClick({weeks: -4})}>
                        <img src="/icons/double-up-arrow.png" />
                    </button>
                    <button className="logbox_button" onClick={() => this.handleClick({weeks: -1})}>
                        <img src="/icons/up-arrow.png" />
                    </button>
                    <button className="logbox_button" onClick={() => this.handleClick({weeks: 1})}>
                        <img src="/icons/down-arrow.png" />
                    </button>
                    <button className="logbox_button" onClick={() => this.handleClick({weeks: 4})}>
                        <img src="/icons/double-down-arrow.png" />
                    </button>
                </div>
            </div>
        );
    }
}

function getHeaderText(weekStart) {
    let weekEnd = lastDayOfWeek(weekStart);

    let text;

    if (!isSameYear(weekStart, weekEnd)) {
        text = `${format(weekStart, "MMMM yyyy")} / ${format(weekEnd, "MMMM yyyy")}`
    } else if (!isSameMonth(weekStart, weekEnd)) {
        text = `${format(weekStart, "MMMM")} / ${format(weekEnd, "MMMM yyyy")}`
    } else {
        text = format(weekStart, "MMMM yyyy")
    }

    return text;
}

function Week(props) {
    let logs = props.logs;
    let places = props.places;
    let selectOptions = placesToOptions(places);

    let elms = [];
    let prev = props.weekStart;

    for (let day of getDaysOfWeek(props.weekStart)) {
        let className = isSameMonth(day, prev) ? "" : "logbox-next-month";
        elms.push(
            <div className={className}>
                {format(day, "EEEE do")}
            </div>
        )
        elms.push(<div className={className + " logbox-no-padding"}>
                    <PlaceSelect
                        defaultValue={getSelectValue(getDayOfYear(day), getYear(day), logs)}
                        options={selectOptions} />
                  </div>)

        prev = day;
    }

    return elms;
}

function getDaysOfWeek(weekStart) {
    let days = []

    for (let i=0; i < 7; i++) {
        days.push(add(weekStart, {days: i}));
    }

    return days;
}

function placesToOptions(places) {
    let options = [];

    for (let place of places) {
        options.push({value: place.name, label: place.name})
    }

    return options;
}

function getSelectValue(dayOfYear, year, logs) {
    if (logs[year] && logs[year].hasOwnProperty(dayOfYear)) {
        return {name: logs[year][dayOfYear], label: logs[year][dayOfYear]}
    } else {
        console.log(arguments)
        return null
    }
}

class PlaceSelect extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectedValue: props.defaultValue,
            options: props.options,
        }
    }

    handleChange(newValue) {
        this.setState({selectedValue: newValue})
    }

    render() {
        const customStyles = {
            control: (provided) => ({
                ...provided,
                borderRadius: 0,
                backgroundColor: "var(--background)",
                width: "100%",
                height: "100%",
                border: "none",
            }),
        
            container: (provided) => ({
                ...provided,
                width: "100%",
                height: "100%",
            }),

            dropdownIndicator : (provided, state) => ({
                display: "none",
            }),

            indicatorSeparator : (provided, state) => ({
                display: "none",
            })
        }

        return <Select value={this.state.selectedValue} placeholder="..." styles={customStyles} options={this.state.options} isClearable={true}
                    onChange={this.handleChange} />
    }
}