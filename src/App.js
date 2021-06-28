import { useState, useEffect } from "react";
import axios from "axios";
import ReactAutocomplete from "react-autocomplete";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${value}`)
      .then(function (response) {
        // handle success
        const parsedResponse = [];
        for (let i = 0; i < response.data[1].length; i++) {
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i],
          });
        }
        setItems(parsedResponse);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [value]);
  return (
    <ReactAutocomplete
      items={items}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.label}
      renderItem={(item, highlighted) => (
        <div key={item.id} style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
          {item.label}
        </div>
      )}
      value={value}
      onChange={e => setValue(e.target.value)}
      onSelect={value => setValue({ value })}
    />
  );
}

export default App;
