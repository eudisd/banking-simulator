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
      trasactions
    } = this.props;

    return (
      <tr>
        <th colSpan="3">
          <div className="ui right floated pagination menu">
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
        </th>
      </tr>
    );
  }
}

export default PaginationList;
