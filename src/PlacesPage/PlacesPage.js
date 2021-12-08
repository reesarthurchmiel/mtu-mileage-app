import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import './PlacesPage.css';
import apiHandler from '../ApiHandler.js';

export default class PlacesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
        }
    }

    componentDidMount() {
        apiHandler.getPlaces().then(newPlaces => this.setState({
            places: newPlaces,
        }))
    }

    render() {
        return (
            <div className='places'>
                <div className="places_topHeader">Places</div>
                <div className="placesgrid">
                    <div className="placesgrid_header">
                        Place name
                    </div>
                    <div className="placesgrid_header">
                        Distance from base (mi)
                    </div>
                    <div className="placesgrid_header">
                        Distance from home (mi)
                    </div>

                    <Rows places={this.state.places} />
                    
                </div>
                <button className='places_addButton'>
                    <i class="fas fa-plus"></i> Add place
                </button>
            </div>
        );
    }

    
}

function Rows(props) {
    let places = props.places;
    let elms = [];

    for (let place of places) {
        elms.push(<Row
                    name={place.name}
                    distanceFromBase={place.distanceFromBase}
                    distanceFromHome={place.distanceFromHome}
                    />)
    }

    return elms;
}

function Row(props) {
    return (
        <div className='placesgrid_row'>
            <div className='placesgrid_row_item'>
                {props.name}
            </div>
            <div className='placesgrid_row_item'>
                {props.distanceFromBase}
            </div>
            <div className='placesgrid_row_item'>
                {props.distanceFromHome}
            </div>

            <div className='placesgrid_buttonGroup'>
                <button className='placesgrid_buttonGroup_button'>D</button>
                <button className='placesgrid_buttonGroup_button'>E</button>
            </div>
        </div>
    )
}