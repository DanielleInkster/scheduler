import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import DayPicker from './DayPicker';

test('renders DayPicker', () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains(<DayPicker />)).toBe(true);
});
