import { mockImages, mocks } from "./mock"
import camelize from 'camelize'

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) {
      reject("No Location found")
    }
    resolve(mock)
  })
}

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.floor(Math.random() * (mockImages.length - 1))]
    })
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemp: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    }
  })
  return camelize(mappedResults)
}