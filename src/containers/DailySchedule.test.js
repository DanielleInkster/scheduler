import React from 'react';
import DailySchedule from './DailySchedule';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const testDate = new Date('Septemer 23, 2020');

it('renders without crashing', () => {
  shallow(<DailySchedule date={testDate} />);
});

describe('date', () => {
  it('renders the date', () => {
    const wrapper = mount(<DailySchedule date={testDate} />);
    const date = wrapper.find('#date');
    expect(date.text()).toEqual('Wed Sep 23 2020');
  });
});

describe('table', () => {
  const wrapper = mount(<DailySchedule date={testDate} />);
  const table = wrapper.find('table');
  const row = table.find('tr');

  it('table grid', () => {
    expect(table).toHaveLength(1);
    expect(row).toHaveLength(10);
  });
});
