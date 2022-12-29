import React from 'react'
import GoogleMapReact from 'google-map-react'
import "./Map.css"
import LocationPin from './LocationPin'
const Map = ({ location, zoomLevel}) => {
  return (
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Store</h2>
    
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
            defaultCenter={location.center}
            defaultZoom={zoomLevel}


          >
            <LocationPin
              lat={location.center.lat}
              lng={location.center.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  
}

export default Map