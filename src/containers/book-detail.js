import React, { Component } from 'react';


class BookDetail extends Component{
  render(){
      return(
        <div> Book Details!!! </div>
      );
  }
};


function mapStateToProps(state){
  return {
    book: activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
