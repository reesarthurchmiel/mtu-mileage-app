import React from 'react';
import { format } from 'date-fns';

import Header from './Header.js';
import Nav from './Nav.js';

import LogPage from './LogPage/LogPage.js'
import PlacesPage from "./PlacesPage/PlacesPage.js";
import apiHandler from './ApiHandler.js';
import Pages from './PagesEnum.js';
import * as Utils from './Utils.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleNavLogClick = this.handleNavLogClick.bind(this);
        this.handleNavPlacesClick = this.handleNavPlacesClick.bind(this);
        this.updateLog = this.updateLog.bind(this);
        this.deleteLog = this.deleteLog.bind(this);
        this.getLogs = this.getLogs.bind(this);
        this.savePlace = this.savePlace.bind(this);
        this.deletePlace = this.deletePlace.bind(this);

        this.state = {
            selectedPage: Pages.LOG_PAGE,
            logs: null,
            places: null,
            logsLoading: true,
            placesLoading: true,
            errored: false,
        }
    }

    handleNavLogClick() {
        this.setState({ selectedPage: Pages.LOG_PAGE });
    }

    handleNavPlacesClick() {
        this.setState({ selectedPage: Pages.PLACES_PAGE });
    }

    componentDidMount() {
        const placesDone = this.getPlaces();

        const logsDone = this.getLogs();

        Promise.all([placesDone, logsDone]).then(() => this.setState({
            placesLoading: false,
            logsLoading: false,
        }))
    }

    async updateLog(date, value) {
        this.setState({ logsLoading: true })

        let dateString = Utils.dateToDateString(date)
        await apiHandler.updateLog(dateString, value)
            .catch(() => this.setState({ errored: true }));
        await this.getLogs();

        this.setState({ logsLoading: false })
    }

    async deleteLog(date, value) {
        this.setState({ logsLoading: true })

        let dateString = Utils.dateToDateString(date)
        await apiHandler.deleteLog(dateString, value)
            .catch(() => this.setState({ errored: true }));
        await this.getLogs();

        this.setState({ logsLoading: false })
    }

    async getLogs() {
        let newLogs = await apiHandler.getLogs().catch(() => this.setState({ errored: true }));

        let newLogsMap = Utils.convertToMap(newLogs, "date");

        this.setState({
            logs: newLogsMap,
        })
        console.log(newLogsMap)
    }

    async getPlaces() {
        let newPlaces = await apiHandler.getPlaces().catch(() => this.setState({ errored: true }));

        let newPlacesMap = Utils.convertToMap(newPlaces, "_id");
        this.setState({
            places: newPlacesMap,
        })
    }

    async savePlace(name, distanceFromBase, distanceFromHome) {
        this.setState({
            placesLoading: true,
        })

        await apiHandler.savePlace(name, distanceFromBase, distanceFromHome)
            .catch(() => this.setState({ errored: true }));
        await this.getPlaces();

        this.setState({
            placesLoading: false,
        })
    }

    async deletePlace(placeId) {
        this.setState({
            placesLoading: true,
            logsLoading: true, // log entries with the deleted place are also deleted
        })

        await apiHandler.deletePlace(placeId)
            .catch(() => this.setState({ errored: true }));

        const getPlacesPromise = this.getPlaces();
        const getLogsPromise = this.getLogs();
        await Promise.all([getPlacesPromise, getLogsPromise]);



        this.setState({
            placesLoading: false,
            logsLoading: false,
        })
    }

    render() {
        const apiFuncs = {
            updateLog: this.updateLog,
            deleteLog: this.deleteLog,
            getLogs: this.getLogs,
            savePlace: this.savePlace,
            deletePlace: this.deletePlace,
        }

        if (this.state.errored) {
            return <p>Coudn't connect to server, please refresh and try again</p>
        }

        return (
            <>
                <Header />
                <Nav selected={this.state.selectedPage} onLogClick={this.handleNavLogClick} onPlacesClick={this.handleNavPlacesClick} />
                {this.state.selectedPage === Pages.LOG_PAGE ?
                    <LogPage
                        logs={this.state.logs}
                        places={this.state.places}
                        apiFuncs={apiFuncs}
                        logsLoading={this.state.logsLoading}
                        placesLoading={this.state.placesLoading} /> :
                    <PlacesPage
                        logs={this.state.logs}
                        places={this.state.places}
                        apiFuncs={apiFuncs}
                        placesLoading={this.state.placesLoading} />}
            </>
        );
    }
};

export default App;