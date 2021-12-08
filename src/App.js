import React from 'react';

import Header from './Header.js';
import Nav from './Nav.js';

import LogPage from './LogPage/LogPage.js'
import PlacesPage from "./PlacesPage/PlacesPage.js";

const LOG_PAGE=0;
const PLACES_PAGE=1;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogClick = this.handleLogClick.bind(this);
        this.handlePlacesClick = this.handlePlacesClick.bind(this);

        const placesResponse = [
            {_id: 1, name: "Langstone", distanceFromBase: 47, distanceFromHome: 36},
            {_id: 2, name: "Blackwater", distanceFromBase: 92, distanceFromHome: 64},
        ]

        const logsResponse = [
            {
                _id: 1,
                year: "2021",
                days: {
                    _id: 2,
                    "341": "Langstone",
                    "343": "Blackwater",
                }
            },
        ]

        this.state = {
            selectedPage: LOG_PAGE,
        }
    }

    handleLogClick() {
        this.setState({selectedPage: LOG_PAGE});
    }

    handlePlacesClick() {
        this.setState({selectedPage: PLACES_PAGE});
    }

    render() {
        return (
            <>
                <Header />
                <Nav selected={this.state.selectedPage} onLogClick={this.handleLogClick} onPlacesClick={this.handlePlacesClick} />
                {this.state.selectedPage === LOG_PAGE ? <LogPage /> : <PlacesPage />}
            </>
        );
    }
};

export default App;