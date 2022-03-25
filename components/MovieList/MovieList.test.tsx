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

const erroredMock = [
  {
    request: {
      query: GET_MOVIES,
    },
    error: new Error('An error occurred'),
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

  it('should show a loading indicator initially', () => {
    const { container } = render(
      <MockedProvider addTypename={false}>
        <MovieList />
      </MockedProvider>
    );
    expect(container.getElementsByClassName('chakra-spinner').length).toBe(1);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('should show an errored state', async () => {
    render(
      <MockedProvider mocks={erroredMock} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });
});
