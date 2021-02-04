import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { SEARCH_PHOTOS_BY_QUERY } from './gql/SearchPhotosByQuery';
import App from './App';

describe('<App />', () => {
  beforeEach(() => expect.hasAssertions());

  test('should render App on startup without crashing', async () => {
    const mockSearchPhotosByQueryData = {
      request: {
        query: SEARCH_PHOTOS_BY_QUERY,
        variables: {
          page: 1,
          limit: 10,
          query: 'officia porro iure',
        },
      },
      result: {
        data: {
          photos: {
            meta: {
              totalCount: 1,
            },
            links: null,
            data: [
              {
                id: '3',
                title: 'officia porro iure quia iusto qui ipsa ut modi',
                url: 'https://via.placeholder.com/600/24f355',
                thumbnailUrl: 'https://via.placeholder.com/150/24f355',
              },
            ],
          },
        },
      },
    };

    await act(async () => {
      const component = TestRenderer.create(
        <MockedProvider mocks={[mockSearchPhotosByQueryData]} addTypename={false}>
          <App />
        </MockedProvider>,
      );
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(typeof component.root.findByType('p').children.join('')).toEqual('string');
    });
  });
});
