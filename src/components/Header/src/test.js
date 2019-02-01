import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Header from '.';

describe('Header', () => {
  const example = 'example';
  const wrapper = <Header>{example}</Header>;

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
