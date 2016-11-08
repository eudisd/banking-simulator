import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import accountActionCreators from '../../actions/accountActionCreators';
import PaginationList from '../../components/PaginationList';

class PaginationContainer extends React.Component {
  static propTypes = {
    transactions: React.PropTypes.object
  };

  render() {
    return (
      <PaginationList transactions={this.props.transactions} />
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export { PaginationContainer };
export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
