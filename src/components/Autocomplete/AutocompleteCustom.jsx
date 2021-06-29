import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteCustome = ({ articles, searchValue, onSearchChange }) => {
  return (
    <>
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
        onChange={e => {
          // need to fire redirect to the search page later
          console.log(e);
        }}
        value={searchValue}
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
};

export default AutocompleteCustome;
