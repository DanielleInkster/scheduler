import React from 'react';
import { mount } from 'enzyme';
import DailySchedule from './DailySchedule';

const testDate = new Date('Septemer 23, 2020');

describe('table', () => {
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
