import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import { updateCountRequest } from '../../actions';

class Home extends React.Component {
  render() {
    const {
      status,
      count,
      updateCount,
    } = this.props;

    return (
      <Counter
        status={status}
        count={count}
        updateCount={updateCount}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.someReducer.status,
    count: state.someReducer.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCount: (newCount) => {
      dispatch(updateCountRequest(newCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
