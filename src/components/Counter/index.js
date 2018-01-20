import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Counter extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    updateCount: PropTypes.func.isRequired,
  }

  state = {
    animate: false,
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

  increase = () => {
    const {
      count,
      updateCount,
    } = this.props;

    updateCount(count + 1);
  }

  decrease = () => {
    const {
      count,
      updateCount,
    } = this.props;

    updateCount(count - 1);
  }

  render() {
    const {
      animate
    } = this.state;
    const {
      status,
      count,
    } = this.props;

    return (
      <StyledCounter>
        <Display fontSize="1rem">{status}</Display>
        <Display fontSize="6rem" animate={animate}>{count}</Display>
        <ButtonGroup>
          <Button bgColor="#d0d0d0" onClick={this.increase}>+</Button>
          <Button bgColor="#a0a0a0" onClick={this.decrease}>-</Button>
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
  color: ${props => props.animate ? '#61dafb' : '#282c34'};
  background-color: #ffffff;
  text-align: center;
  margin-bottom: 1px;
  padding: 1rem;
  transition: color .25s;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.div`
  font-size: 3rem;
  color: #ffffff;
  background-color: #282c34;
  width: 100px;
  text-align: center;
  transition: background-color .25s;

  &:hover {
    color: #ffffff;
    background-color: #61dafb;
    cursor: pointer;
  }
`;
