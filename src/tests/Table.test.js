import React from 'react';
import Table from '../containers/Table';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const testDate = new Date('Septemer 23, 2020');
const testSched = [
  { time: '9:00 AM', status: 'unavailable' },
  { time: '10:00 AM', status: 'available' },
  { time: '11:00 AM', status: 'available' },
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    date: '2020923',
  }),
  useRouteMatch: () => ({ url: '/date' }),
}));

it('renders without crashing', () => {
  shallow(<Table date={testDate} data={testSched} />);
});

describe('table', () => {
  const wrapper = mount(<Table date={testDate} data={testSched} />);
  const table = wrapper.find('table');
  const row = table.find('tr');

  it('table grid', () => {
    expect(table).toHaveLength(1);
    expect(row).toHaveLength(4);
  });
});
