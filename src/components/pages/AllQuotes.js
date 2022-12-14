import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Laura', text: 'React is fun!'},
  {id: 'q1', author: 'Lory', text: 'React is great!'}
]

const AllQuotes = () => {
  return (
      <QuoteList quotes={DUMMY_QUOTES}/>
  )
};

export default AllQuotes;