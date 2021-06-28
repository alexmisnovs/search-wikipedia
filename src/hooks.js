import { useState, useEffect } from "react";
import axios from "axios";

export const useSearch = query => {
  const [state, setState] = useState({
    articles: [],
    status: "IDLE",
    error: "",
  });
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${query}`)
      .then(function (response) {
        // handle success
        const parsedResponse = [];
        for (let i = 0; i < response.data[1].length; i++) {
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i],
          });
        }
        setState({
          articles: parsedResponse,
          status: "SUCCESS",
          error: "",
        });
      })

      .catch(function (error) {
        setState({
          articles: [],
          status: "ERROR",
          error: error,
        });
      });
  }, [query]);

  return state;
};
