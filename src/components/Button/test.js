import React from 'react';
import { mount } from 'enzyme';

import Button from './';

describe('button', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<Button>Example</Button>);
  });

  it('should render a button', () => {
    expect(wrapper.find('button')).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('disabled button', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<Button disabled />);
  });

  it('should render a button with the disabled attribute', () => {
    expect(wrapper.find('button').prop('disabled')).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


