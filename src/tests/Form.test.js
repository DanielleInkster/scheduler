import React from 'react';
import Form from '../components/Form';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const testDate = new Date('Septemer 23, 2020').toDateString();
const testTime = '10:00 AM';

it('renders without crashing', () => {
  shallow(<Form />);
});

describe('date and time', () => {
  const wrapper = mount(<Form date={testDate} time={testTime} />);

  it('renders the date', () => {
    const date = wrapper.find('#date');
    expect(date.text()).toEqual('Date: Wed Sep 23 2020');
  });

  it('renders the time', () => {
    const time = wrapper.find('#time');
    expect(time.text()).toEqual('Time: 10:00 AM');
  });
});
