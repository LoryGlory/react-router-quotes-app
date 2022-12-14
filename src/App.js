import {Route, Switch, Redirect} from "react-router-dom";
import {Fragment} from "react";
import Header from "./components/layout/Header";
import AllQuotes from "./components/pages/AllQuotes";
import AddQuote from "./components/pages/AddQuote";

function App() {
  return (
      <Fragment>
        <Header/>
        <main>
          <Switch>
            <Route path='/welcome'>
              <h1>
                Welcome!
              </h1>
            </Route>
            <Route path='/all-quotes' exact>
              <AllQuotes/>
            </Route>
            <Route path='/add-a-quote'>
              <AddQuote/>
            </Route>
          </Switch>
        </main>
      </Fragment>
  );
}

export default App;
