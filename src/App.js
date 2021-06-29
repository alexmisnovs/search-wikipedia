import { useState, useEffect } from "react";
import { useSearch, useDebounce } from "./hooks";
import ReactAutocomplete from "react-autocomplete";
import "./App.css";

import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  const { articles, status, error } = useSearch(useDebounce(value));

  return (
    <ReactAutocomplete
      items={articles}
      renderInput={Input}
      inputProps={{ placeholder: "Please type your search" }}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.label}
      renderMenu={(children, value, style) => {
        <div style={{ ...style }} className="input-suggestion">
          {children}
          <a href={`/search?query=${value}`} className="search-link">
            see all results
          </a>
        </div>;
      }}
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
