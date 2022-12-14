import {Route, Switch, Redirect} from "react-router-dom";
import {Fragment} from "react";
import Header from "./components/layout/Header";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
      <Fragment>
        <Header/>
        <main>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/quotes'/>
            </Route>
            <Route path='/quotes' exact>
              <AllQuotes/>
            </Route>
            <Route path='/quotes/:quoteId'>
              <QuoteDetail/>
            </Route>
            <Route path='new-quote'>
              <NewQuote/>
            </Route>
          </Switch>
        </main>
      </Fragment>
  );
}

export default App;
