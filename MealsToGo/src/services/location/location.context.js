import { useState, useEffect, createContext } from "react";


import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {

  const [keyword, setKeyword] = useState("San Francisco")
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword)
    if (!searchKeyword.length) return
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false)
        setLocation(result)
        console.log(result)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }


  return (
    <LocationContext.Provider value={{ location, keyword, isLoading, error, search: onSearch }}>
      {children}
    </LocationContext.Provider>
  )
}