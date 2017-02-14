import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
          <li
            key={books.title} 
            className="list-group col-sm-4">{books.title}</li>
      );
    });
  }
  render () {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList}
      </ul>
    )
  }
}
