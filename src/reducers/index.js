import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  book: booksReducer
});

export default rootReducer;
