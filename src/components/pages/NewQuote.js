import {Fragment} from "react";
import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  return (
      <Fragment>
        <h1>Add a quote here</h1>
        <QuoteForm/>
      </Fragment>
  )
};

export default NewQuote;