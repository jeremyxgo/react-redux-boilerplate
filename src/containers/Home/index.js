import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import { updateCountRequest } from '../../actions';

class Home extends React.Component {
  render() {
    const {
      status,
      count,
      increase,
      decrease,
    } = this.props;

    return (
      <Counter
        status={status}
        count={count}
        increase={increase}
        decrease={decrease}
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
    increase: () => {
      dispatch(updateCountRequest(1));
    },
    decrease: () => {
      dispatch(updateCountRequest(-1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
