import $ from 'jquery';
import React from 'react';
import { Link, withRouter } from 'react-router';

class PaginationList extends React.Component {
  static propTypes = {
    transactions: React.PropTypes.array
  };

  static defaultProps = {
    transactions: []
  };

  render() {
    const {
      transactions
    } = this.props;

    return (
      <div className="sixtween wide column">
        <div className="ui pagination menu">
          <a className="icon item">
            <i className="left chevron icon"></i>
          </a>
          <a className="item">1</a>
          <a className="item">2</a>
          <a className="item">3</a>
          <a className="item">4</a>
          <a className="icon item">
            <i className="right chevron icon"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default PaginationList;
