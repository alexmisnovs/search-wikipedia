import Container from "@material-ui/core/Container";
import CustomContainer from "./components/Container/CustomContainer";
import AutocompleteCustom from "./components/Autocomplete/AutocompleteCustom";
import "./App.css";

const App = () => {
  return (
    <Container maxWidth="sm">
      <CustomContainer>
        {({ searchValue, onSearchChange, articles }) => (
          <AutocompleteCustom
            articles={articles}
            onSearchChange={onSearchChange}
            searchValue={searchValue}
          />
        )}
      </CustomContainer>
    </Container>
  );
};

export default App;
