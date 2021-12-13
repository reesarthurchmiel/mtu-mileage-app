import {
    getDate, getMonth,
    sub, add, eachDayOfInterval, format, eachWeekOfInterval, startOfMonth, lastDayOfMonth, getWeekOfMonth, isSameMonth, startOfWeek, lastDayOfWeek, isSameYear, getYear, getDayOfYear
} from 'date-fns';
import React from 'react';
import Select from 'react-select';

import './LogBox.css';


export default class LogBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);

        let now = new Date();
        let week = startOfWeek(now);

        this.state = {
            week: week,
            selectsLoading: Array(7).fill(false),
        }
    }

    handleClick(delta) {
        let newWeek = add(this.state.week, delta);

        this.setState({
            week: newWeek,
        })

        this.props.onWeekChange(newWeek);
    }

    handleSelectChange(date, idx, newValue) {
        let selectsLoading = this.state.selectsLoading.slice()
        selectsLoading[idx] = true;
        this.setState({
            selectsLoading: selectsLoading,
        })

        if (newValue === null) {
            this.props.apiFuncs.deleteLog(date).then(
                () => this.setState({
                    selectsLoading: Array(7).fill(false),
                })
            );
        } else {
            this.props.apiFuncs.updateLog(date, newValue.value).then(
                () => this.setState({
                    selectsLoading: Array(7).fill(false),
                })
            );
        }
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
                        <Week logs={this.props.logs}
                            places={this.props.places}
                            weekStart={this.state.week}
                            onChange={this.handleSelectChange}
                            selectsLoading={this.state.selectsLoading}
                            logsLoading={this.props.logsLoading} />
                    </div>
                </div>
                <div className='logbox_buttons'>
                    <button className='logbox_button' onClick={() => this.handleClick({ weeks: -4 })}>
                        <img src="/icons/double-up-arrow.png" />
                    </button>
                    <button className="logbox_button" onClick={() => this.handleClick({ weeks: -1 })}>
                        <img src="/icons/up-arrow.png" />
                    </button>
                    <button className="logbox_button" onClick={() => this.handleClick({ weeks: 1 })}>
                        <img src="/icons/down-arrow.png" />
                    </button>
                    <button className="logbox_button" onClick={() => this.handleClick({ weeks: 4 })}>
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
    let key = 0;
    let prev = props.weekStart;

    for (const [idx, day] of getDaysOfWeek(props.weekStart).entries()) {
        let className = isSameMonth(day, prev) ? "" : "logbox-next-month";
        elms.push(
            <div key={key++} className={className}>
                {format(day, "EEEE do")}
            </div>
        )

        elms.push(<div key={key++} className={className + " logbox-no-padding"}>
            <LogSelect
                value={getSelectValue(day, logs, places)}
                options={selectOptions}
                onChange={(newValue) => props.onChange(day, idx, newValue)}
                loading={props.selectsLoading[idx]}
                logsLoading={props.logsLoading}
            />
        </div>)

        prev = day;
    }

    return elms;
}

function getDaysOfWeek(weekStart) {
    let days = []

    for (let i = 0; i < 7; i++) {
        days.push(add(weekStart, { days: i }));
    }

    return days;
}

function placesToOptions(places) {
    if (places === null) {
        return []
    }

    let options = [];

    for (let place of places.values()) {
        options.push({ value: place._id, label: place.name })
    }

    return options;
}

function getSelectValue(date, logs, places) {
    let logEntry = dateToLogEntry(date, logs);
    if (logEntry) {
        return { value: logEntry.placeId, label: places.get(logEntry.placeId).name }
    } else {
        return null
    }
}

function dateToLogEntry(date, logs) {
    let entry = format(date, "yyyy-MM-dd")

    if (logs && logs.has(entry)) {
        return logs.get(entry);
    } else {
        return null
    }
}

function LogSelect(props) {
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

        dropdownIndicator: (provided, state) => ({
            display: "none",
        }),

        indicatorSeparator: (provided, state) => ({
            display: "none",
        })
    }

    return <Select value={props.value}
        placeholder="..."
        styles={customStyles}
        options={props.options}
        isClearable={true}
        onChange={props.onChange}
        isLoading={props.loading || props.logsLoading} />
}