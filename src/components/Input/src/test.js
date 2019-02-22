import React from 'react';
import { mount } from 'enzyme';
import { PRIMARY } from '../../../constants/colours';

import Input from './';

describe('Input', () => {
  const wrapper = <Input type="text" />;
  const withError = <Input type="text" error="example" />;
  const withColouredError = <Input type="text" errorColor={PRIMARY} error="example" />;

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches withError snapshot', () => {
    expect(mount(withError)).toMatchSnapshot('with error mount');
  });

  it('matches withColouredError snapshot', () => {
    expect(mount(withColouredError)).toMatchSnapshot('with coloured error mount');
  });
});
