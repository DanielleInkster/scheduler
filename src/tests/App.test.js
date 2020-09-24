import React from 'react';
import App from '../App';
import DayPicker from '../containers/DayPicker';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});

test('renders DayPicker', () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains(<DayPicker />)).toBe(true);
});
