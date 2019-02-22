import React from 'react';
import { shallow, mount } from 'enzyme';

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

  it('Test click event', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Button onClick={mockFunction}/>);
    wrapper.find('Button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});

describe('disabled button', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<Button disabled={true} />);
  });

  it('should render a button with the disabled attribute', () => {
    expect(wrapper.find('button').prop('disabled')).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


