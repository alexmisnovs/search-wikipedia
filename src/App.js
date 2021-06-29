import { useSearch, useDebounce, useSearchForm } from "./hooks";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./App.css";

function App() {
  const { searchValue, onSearchChange } = useSearchForm();
  const { articles, status, error } = useSearch(useDebounce(searchValue));

  return (
    <Container maxWidth="sm">
      <Autocomplete
        freeSolo
        size="small"
        id="free-solo-2-demo"
        disableClearable
        options={articles.map(article => article.label)}
        onInputChange={onSearchChange}
        // onInputChange={(event, newInputValue) => {
        //   console.log(newInputValue);
        //   setValue(newInputValue);
        // }}
        onChange={onSearchChange}
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
    </Container>
  );
}

export default App;
