import React from 'react';
import styled from 'styled-components';
import { shallow, mount, render } from 'enzyme';
import Counter, { ButtonGroup, Button } from '..';

describe('Counter Component', () => {
  const props = {
    status: 'Testing',
    count: 0,
    updateCount: jest.fn(),
  };

  test('render', () => {
    const wrapper = shallow(<Counter {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('receive same props', () => {
    jest.useFakeTimers();
    const wrapper = mount(<Counter {...props}/>);
    wrapper.setProps({ count: 0 });
    jest.runAllTimers();
    expect(wrapper.prop('count')).toBe(0);
  });

  test('receive new props', () => {
    jest.useFakeTimers();
    const wrapper = mount(<Counter {...props}/>);
    wrapper.setProps({ count: 1 });
    jest.runAllTimers();
    expect(wrapper.prop('count')).toBe(1);
  });

  test('click increment button', () => {
    const wrapper = mount(<Counter {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), 'increase');
    wrapper.instance().forceUpdate();
    wrapper.find(ButtonGroup).find(Button).at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  test('click decrement button', () => {
    const wrapper = mount(<Counter {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), 'decrease');
    wrapper.instance().forceUpdate();
    wrapper.find(ButtonGroup).find(Button).at(1).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
