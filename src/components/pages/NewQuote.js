// component to add quotes, use post method from ../lib/api
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";

const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  // handler for adding quotes
  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  }

  return (
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
  )
};

export default NewQuote;