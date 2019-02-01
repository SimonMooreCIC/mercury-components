import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Paragraph from './';

describe(Paragraph, () => {
  const example = 'example';
  const wrapper = <Paragraph>{example}</Paragraph>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph>Example</Paragraph>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
