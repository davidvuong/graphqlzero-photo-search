import React from 'react';
import { shallow } from 'enzyme';
import { times } from 'lodash';
import { SearchResultsList } from './SearchResultsList';
import { genNumber, genPhoto } from '../Gen';
import { Photo } from '../typed/Photo';

describe('<SearchResultsList />', () => {
  beforeEach(() => expect.hasAssertions());

  test('should render results list successfully when photos are available', () => {
    const photos = times(genNumber(1, 3), () => genPhoto());

    const wrapper = shallow(<SearchResultsList photos={photos} />);
    expect(wrapper.props().children.type).toEqual('div');
  });

  test('should render no results message when there are no photos', () => {
    const photos: Photo[] = [];

    const wrapper = shallow(<SearchResultsList photos={photos} />);
    expect(typeof wrapper.props().children).toBe('string');
  });
});
