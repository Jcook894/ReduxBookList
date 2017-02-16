import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

export class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">{book.title}</li>
      );
    });
  }
  render () {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Connects Redux with React.
function mapStateToProps(state){
  //Whatever is returned will show up as props
  //inside of BookList.
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as
//Props on the BoookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should
  //Be passed into all of our reducers.
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch)
}

//Promote booklist from component to container - it
//needs to know about this new dispatch method,
//selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
