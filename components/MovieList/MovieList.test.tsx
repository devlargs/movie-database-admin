import { MockedProvider } from '@apollo/client/testing';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import { render, screen, waitFor } from '@testing-library/react';
import MovieList from '.';

const mocks = [
  {
    request: {
      query: GET_MOVIES,
    },
    result: {
      data: {
        movies: [
          {
            _id: '62387fa422f6f09f50376de3',
            title: 'The Departed',
            genres: [
              {
                _id: '62387e9322f6f09f50376dd9',
                name: 'Thriller',
                color: '#311b92',
              },
            ],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
          },
          {
            _id: '62387fa422f6f09f50376de3',
            title: 'The Departed',
            genres: [
              {
                _id: '62387e9322f6f09f50376dd9',
                name: 'Thriller',
                color: '#311b92',
              },
            ],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
          },
          {
            _id: '62387fa422f6f09f50376de3',
            title: 'The Departed',
            genres: [
              {
                _id: '62387e9322f6f09f50376dd9',
                name: 'Thriller',
                color: '#311b92',
              },
            ],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
          },
        ],
      },
    },
  },
];

describe('MovieList', () => {
  it('should successfully render movies', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('movie').length).toBe(mocks[0].result.data.movies.length);
    });
  });
});
