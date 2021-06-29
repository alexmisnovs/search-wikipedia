import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import CustomContainer from "./components/Container/CustomContainer";
import AutocompleteCustom from "./components/Autocomplete/AutocompleteCustom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
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
          </Route>

          <Route path="/search">
            <>Search</>
          </Route>
          <Route path="/about" render={() => <div>About page</div>}></Route>
          <Route render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
