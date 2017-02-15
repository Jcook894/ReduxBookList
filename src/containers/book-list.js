import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
          <li
            key={book.title}
            className="list-group-item col-md-4">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
