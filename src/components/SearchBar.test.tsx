import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
  beforeEach(() => expect.hasAssertions());

  test('should render input successfully', () => {
    const onChangeMock = jest.fn();

    const wrapper = shallow(<SearchBar onChange={onChangeMock} />);
    expect(wrapper.props().children.props.type).toEqual('search');
  });
});
