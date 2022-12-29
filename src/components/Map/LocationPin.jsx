import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Map.css"

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon sx = {{fontSize: 50 }} />
  </div>
)

export default LocationPin