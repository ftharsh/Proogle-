import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]); //!required State Feilds
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // for 'videos' its "/videos" , similarly "/images" , "/news" , "/search"
  const getResults = async (type) => {
    // asyn bcuz we need to make some api calls
    setIsLoading(true);
    //api call
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d841ebc513mshb5cd68756669965p1faf0bjsnef999cc7e19b",
        "x-rapidapi-host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await response.json(); //get data from fetch
    setResults(data); //bcuz we need to set results(this data is our actual results)
    setIsLoading(false); //after set results , we are not more loading
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);
