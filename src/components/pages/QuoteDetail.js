import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Laura', text: 'React is fun!'},
  {id: 'q2', author: 'Lory', text: 'React is great!'}
]

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return (
        <NoQuotesFound/>
    )
  }

  return (
      <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
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