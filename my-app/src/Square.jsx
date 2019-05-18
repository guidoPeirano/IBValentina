import React from 'react';
import logo from './logo.svg';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
       {this.props.square}
      </button>
    );
  }
}






export default Square;
