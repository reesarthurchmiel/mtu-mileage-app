import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import './PlacesPage.css';

export default class PlacesPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleSavePlace = this.handleSavePlace.bind(this)
        this.handleDeletePlace = this.handleDeletePlace.bind(this)

        this.state = {
            adding: false,
        }
    }

    handleAddClick() {
        this.setState({ adding: true })
    }

    handleSavePlace(name, distanceFromBase, distanceFromHome) {
        this.setState({ adding: false })
        this.props.apiFuncs.savePlace(name, distanceFromBase, distanceFromHome)
    }

    handleDeletePlace(placeId) {
        this.props.apiFuncs.deletePlace(placeId);
    }

    render() {
        return (
            <div className='places'>
                <div className="places_topHeader">Places</div>
                <div className="placesgrid">
                    {this.props.placesLoading &&
                        <div className='placesgrid_loadingOverlay'>Loading...</div>}

                    <div className="placesgrid_header">
                        Place name
                    </div>
                    <div className="placesgrid_header">
                        Distance from base (mi)
                    </div>
                    <div className="placesgrid_header">
                        Distance from home (mi)
                    </div>

                    <Rows places={this.props.places} onDeletePlace={this.handleDeletePlace} />
                    {!this.props.placesLoading && this.state.adding && <EditRow onClick={this.handleSavePlace} />}

                </div>
                {!this.props.placesLoading && !this.state.adding &&
                    <button className='places_addButton' onClick={this.handleAddClick}>
                        <i className="fas fa-plus"></i> Add place
                    </button>}

            </div>
        );
    }
}

function Rows(props) {
    let places = props.places;
    let elms = [];

    for (let place of places.values()) {
        elms.push(<Row
            key={place._id}
            placeId={place._id}
            name={place.name}
            distanceFromBase={place.distanceFromBase}
            distanceFromHome={place.distanceFromHome}
            onDeletePlace={props.onDeletePlace}
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
                <button onClick={() => props.onDeletePlace(props.placeId)} className='placesgrid_buttonGroup_button'>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

class EditRow extends React.Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleBaseChange = this.handleBaseChange.bind(this)
        this.handleHomeChange = this.handleHomeChange.bind(this)


        this.state = {
            nameValue: '',
            distanceFromBaseValue: '',
            distanceFromHomeValue: '',
        }
    }

    handleNameChange(evt) {
        this.setState({ nameValue: evt.target.value })
    }

    handleBaseChange(evt) {
        this.setState({ distanceFromBaseValue: evt.target.value })
    }

    handleHomeChange(evt) {
        this.setState({ distanceFromHomeValue: evt.target.value })
    }

    render() {
        return (
            <div className='placesgrid_row'>
                <input className='placesgrid_row_item'
                    type="text"
                    value={this.state.nameValue}
                    onChange={this.handleNameChange}></input>
                <input className='placesgrid_row_item'
                    type="number"
                    value={this.state.distanceFromBaseValue}
                    onChange={this.handleBaseChange}></input>
                <input className='placesgrid_row_item'
                    type="number"
                    value={this.state.distanceFromHomeValue}
                    onChange={this.handleHomeChange}></input>

                <div className='placesgrid_buttonGroup placesgrid_buttonGroup--show'>
                    <button className='placesgrid_buttonGroup_button'
                        onClick={() => this.props.onClick(
                            this.state.nameValue,
                            this.state.distanceFromBaseValue,
                            this.state.distanceFromHomeValue,
                        )}>
                        <i className="fas fa-save"></i>
                    </button>
                </div>
            </div>
        )
    }
}