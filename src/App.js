import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Test from "./TestComponent";

class App extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };

  componentDidMount() {
    const map = this.refs.map.leafletElement;
    console.log("resizing");
    setTimeout(() => map.invalidateSize(true), 100);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Router>
        <div>
          <Route path="/test" component={Test} />
          <Map ref="map" center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup autoPan={false}>
                testing A pretty CSS3 popup. <br /> Easily customizable.
                <Link to="/test">test</Link>
              </Popup>
            </Marker>
          </Map>
        </div>
      </Router>
    );
  }
}

export default App;
