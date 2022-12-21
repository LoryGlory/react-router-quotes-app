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

  const {quoteId} = params;

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
        <div className='centered'>
          <LoadingSpinner/>
        </div>
    )
  }

  if (error) {
    return (
        <p>No quote found!</p>
    )
  }

  if (!loadedQuote.text) {
    return (
        <p>No quote found!</p>
    )
  }

  return (
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