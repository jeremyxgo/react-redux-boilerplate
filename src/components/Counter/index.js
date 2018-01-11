import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Counter extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
  }

  state = {
    nanimate: false,
  }

  componentWillReceiveProps(nextProps) {
    const { count: currentCount } = this.props;
    const { count: newCount } = nextProps;

    if (currentCount != newCount) {
      this.setState({ animate: true });
      setTimeout(() => {
        this.setState({ animate: false });
      }, 250);
    }
  }

  render() {
    const {
      animate
    } = this.state;
    const {
      status,
      count,
      increase,
      decrease,
    } = this.props;

    return (
      <StyledCounter>
        <Display fontSize="1rem">{status}</Display>
        <Display fontSize="6rem" animate={animate}>{count}</Display>
        <ButtonGroup>
          <Button bgColor="#d0d0d0" onClick={increase}>+</Button>
          <Button bgColor="#a0a0a0" onClick={decrease}>-</Button>
        </ButtonGroup>
      </StyledCounter>
    );
  }
}

const StyledCounter = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Display = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.animate ? '#33d6f5' : '#000000'};
  background-color: #ffffff;
  text-align: center;
  padding: 1rem;
  transition: color .25s;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.div`
  font-size: 3rem;
  min-width: 120px;
  background-color: ${props => props.bgColor || '#cccccc'};
  text-align: center;
  padding: 0rem 2rem;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #33d6f5;
  }
`;
