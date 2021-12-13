import './LogPage.css';
import LogBox from './LogBox.js';
import Summary from './Summary.js';
import React from 'react';
import { format, add, getDaysInMonth, startOfMonth, getYear, getDayOfYear } from 'date-fns';

class LogPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleWeekChange = this.handleWeekChange.bind(this);

        this.state = {
            month: startOfMonth(new Date()),
        }
    }

    handleWeekChange(newWeek) {
        let newMonth = startOfMonth(newWeek);
        if (newMonth !== this.state.month) {
            this.setState({
                month: newMonth,
            })
        }
    }

    render() {
        return (
            <div className='logpage'>
                <LogBox
                    logs={this.props.logs}
                    places={this.props.places}
                    apiFuncs={this.props.apiFuncs}
                    onWeekChange={this.handleWeekChange}
                    logsLoading={this.props.logsLoading} />
                <Summary
                    logs={this.props.logs}
                    places={this.props.places}
                    month={this.state.month}
                    logsLoading={this.props.logsLoading}
                    placesLoading={this.props.placesLoading} />
            </div>
        );
    }
}

export default LogPage;