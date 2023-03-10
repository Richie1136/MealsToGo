import { useState, useEffect, useContext } from "react";
import MapView from 'react-native-maps'
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
height: 100%;
width: 100%;
`

export const MapScreen = () => {

  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantsContext)
  const [latDelta, setLatDelta] = useState(0)

  const { viewport, lat, lng } = location
  console.log(viewport.northeast)

  useEffect(() => {
    const northeastLat = viewport.northeast.lat
    const southwestLat = viewport.southwest.lat
    const latDelta = northeastLat - southwestLat
    setLatDelta(latDelta)
  }, [location, viewport])


  return (
    <>
      <Search />
      <Map region={{ latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.02 }}>
        {restaurants.map((restaurant) => {
          return null
        })}
      </Map>
    </>

  )
}