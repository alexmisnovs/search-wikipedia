import { useState } from "react";
import { useSearch, useDebounce } from "./hooks";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const { articles, status, error } = useSearch(useDebounce(value));

  return (
    <>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={articles.map(article => article.label)}
        onInputChange={(event, newInputValue) => {
          console.log(newInputValue);
          setValue(newInputValue);
        }}
        onChange={value => {
          console.log(value);
          setValue({ value });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </>
  );
}

export default App;
