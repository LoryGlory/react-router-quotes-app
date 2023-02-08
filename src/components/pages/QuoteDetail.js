// component for displaying a single quote
// using Router, useParams and RouteMatch to display corresponding dynamic quote id dynamically
import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  // use quoteId as parameter for url identification below; quoteId = firebase data entry key
  const {quoteId} = params;

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // display loader when status is pending
  if (status === 'pending') {
    return (
        <div className='centered'>
          <LoadingSpinner/>
        </div>
    )
  }

  // display error when no connection can be established
  if (error) {
    return (
        <p>No quote found!</p>
    )
  }

  // display error when no quotes are found
  if (!loadedQuote.text) {
    return (
        <p>No quote found!</p>
    )
  }

  return (
      // display corresponding quote dynamically
      <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Route path={match.path} exact>
          <div className='centered'>
            <Link to={`${match.url}/comments`} className='btn--flat'>Load comments</Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments/>
        </Route>
      </Fragment>
  )
};

export default QuoteDetail;